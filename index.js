require('dotenv').config();
const fs = require('fs');
const pdfParse = require('pdf-parse');
const readline = require('readline-sync');

const { HuggingFaceInferenceEmbeddings } = require("@langchain/community/embeddings/hf");
const { HuggingFaceInference } = require("@langchain/community/llms/hf");
const { Chroma } = require("langchain/vectorstores/chroma");
const { RecursiveCharacterTextSplitter } = require("langchain/text_splitter");
const { RetrievalQAChain } = require("langchain/chains");

(async () => {
  // parse pdf
  const pdfBuffer = fs.readFileSync("sample.pdf");
  const parsed = await pdfParse(pdfBuffer);
  const fullText = parsed.text;

  // split text
  const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 500, chunkOverlap: 50 });
  const docs = await splitter.createDocuments([fullText]);

  // embed chunks
  const embeddings = new HuggingFaceInferenceEmbeddings({
    apiKey: process.env.HUGGINGFACE_API_KEY,
    model: 'sentence-transformers/all-MiniLM-L6-v2',
  });

  const vectorStore = await Chroma.fromDocuments(docs, embeddings);

  //load llm
  const llm = new HuggingFaceInference({
    apiKey: process.env.HUGGINGFACE_API_KEY,
    model: "mistralai/Mistral-7B-Instruct-v0.1",
  });

  //RAG chain
  const chain = RetrievalQAChain.fromLLM(llm, vectorStore.asRetriever());

  //Terminal ui
  console.log("Ask questions about the PDF (type 'exit' to quit):\n");

  while (true) {
    const input = readline.question("You: ");
    if (input.toLowerCase() === "exit") break;

    const res = await chain.call({ query: input });
    console.log("Bot:", res.text, "\n");
  }
})();
