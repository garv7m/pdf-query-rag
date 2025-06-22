# 🔍 PDF Query Tool using RAG and Vector Search

This is a Node.js-based command-line application that lets you ask questions from a PDF file using Retrieval-Augmented Generation (RAG). It uses Hugging Face models for embeddings and language generation, and Chroma for vector storage — all powered by LangChain.

---

## 🚀 Features

- 📄 Parses any PDF and chunks its content intelligently
- 🧠 Embeds the content using Hugging Face sentence transformers
- 🤖 Uses a language model (LLM) to answer questions based on the PDF
- 🔁 Supports conversational Q&A in terminal
- 🔐 API keys managed via `.env` file

---

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- [LangChain JS](https://js.langchain.com/)
- [pdf-parse](https://www.npmjs.com/package/pdf-parse)
- [Hugging Face Inference API](https://huggingface.co/inference-api)
- [Chroma (in-memory vector DB)](https://www.trychroma.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [readline-sync](https://www.npmjs.com/package/readline-sync)

---

## 🧪 Sample Models Used

- Embeddings: sentence-transformers/all-MiniLM-L6-v2

- LLM: mistralai/Mistral-7B-Instruct-v0.1

---

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/pdf-rag-query-tool.git
cd pdf-rag-query-tool
```
### 2. Install dependencies
```bash
npm install
```
### 3. Add your Hugging Face API key
```
Create a .env file in the root:

HUGGINGFACE_API_KEY=your_huggingface_api_key_here
```

### 4. Add a PDF file
```
Place your PDF file (e.g., sample.pdf) in the root directory.
```
