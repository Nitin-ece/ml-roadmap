export interface Topic {
  t: string;
  tag: string;
  tc: string;
}

export interface Resource {
  n: string;
  t:
    | "yt"
    | "course"
    | "book"
    | "docs"
    | "paper"
    | "platform"
    | "blog"
    | "tool"
    | "api"
    | "model";
  f: boolean;
  u: string;
}

export interface Section {
  name: string;
  icon: string;
  iconBg: string;
  topics: Topic[];
  resources: Resource[];
  tip: string;
}

export interface Phase {
  id: number;
  label: string;
  title: string;
  time: string;
  color: string;
  colorBg: string;
  sections: Section[];
}

export const PHASES: Phase[] = [
  {
    id: 0,
    label: "Phase 0",
    title: "Prerequisites & Foundations",
    time: "2–3 months",
    color: "#a78bfa",
    colorBg: "rgba(167,139,250,.15)",
    sections: [
      {
        name: "Python for AI/ML",
        icon: "🐍",
        iconBg: "rgba(167,139,250,.2)",
        topics: [
          {
            t: "Variables, data types & control flow",
            tag: "core",
            tc: "#a78bfa",
          },
          { t: "Functions, decorators & closures", tag: "core", tc: "#a78bfa" },
          {
            t: "Object-Oriented Programming (OOP)",
            tag: "core",
            tc: "#a78bfa",
          },
          {
            t: "NumPy — vectorised array operations",
            tag: "data",
            tc: "#38bdf8",
          },
          { t: "Pandas — dataframes & wrangling", tag: "data", tc: "#38bdf8" },
          {
            t: "Matplotlib & Seaborn — visualisation",
            tag: "data",
            tc: "#38bdf8",
          },
        ],
        resources: [
          {
            n: "Corey Schafer — Python Playlist",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/@coreyms/playlists",
          },
          {
            n: "freeCodeCamp — Scientific Python",
            t: "yt",
            f: true,
            u: "https://www.freecodecamp.org/learn/scientific-computing-with-python/",
          },
          {
            n: "Kaggle Learn — Python & Pandas",
            t: "course",
            f: true,
            u: "https://www.kaggle.com/learn",
          },
          {
            n: "Official Python Tutorial",
            t: "docs",
            f: true,
            u: "https://docs.python.org/3/tutorial/",
          },
        ],
        tip: "Master Python fundamentals first. Use Kaggle for hands-on Pandas practice—it's the best way to learn data manipulation.",
      },
      {
        name: "Mathematical Foundations",
        icon: "📐",
        iconBg: "rgba(56,189,248,.2)",
        topics: [
          {
            t: "Linear Algebra — Vectors & Matrices",
            tag: "math",
            tc: "#f5a623",
          },
          {
            t: "Calculus — Chain rule & Gradients",
            tag: "math",
            tc: "#f5a623",
          },
          {
            t: "Statistics — Mean, Variance, Std Dev",
            tag: "math",
            tc: "#f5a623",
          },
          {
            t: "Probability — Bayes Theorem & PDFs",
            tag: "math",
            tc: "#f5a623",
          },
          { t: "Matrix Decomposition (SVD, PCA)", tag: "adv", tc: "#e94560" },
        ],
        resources: [
          {
            n: "3Blue1Brown — Essence of Linear Algebra",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr",
          },
          {
            n: "3Blue1Brown — Essence of Calculus",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNPOjrT6KVlfJuKtYTftqH6",
          },
          {
            n: "StatQuest with Josh Starmer",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/@statquest",
          },
          {
            n: "Khan Academy — Stats & Probability",
            t: "course",
            f: true,
            u: "https://www.khanacademy.org/math/statistics-probability",
          },
        ],
        tip: "Watch 3Blue1Brown for intuition before touching formulas. StatQuest is mandatory for understanding how stats works in ML.",
      },
    ],
  },
  {
    id: 1,
    label: "Phase 1",
    title: "Traditional Machine Learning",
    time: "2–3 months",
    color: "#38bdf8",
    colorBg: "rgba(56,189,248,.15)",
    sections: [
      {
        name: "Classical Algorithms",
        icon: "⚙️",
        iconBg: "rgba(56,189,248,.2)",
        topics: [
          { t: "Linear & Logistic Regression", tag: "core", tc: "#38bdf8" },
          { t: "Decision Trees & Random Forests", tag: "core", tc: "#38bdf8" },
          { t: "SVMs & k-Nearest Neighbors", tag: "core", tc: "#38bdf8" },
          {
            t: "Gradient Boosting (XGBoost, LightGBM)",
            tag: "ensemble",
            tc: "#a78bfa",
          },
          { t: "Unsupervised: k-Means & PCA", tag: "unsup", tc: "#00d4aa" },
        ],
        resources: [
          {
            n: "Andrew Ng — ML Specialization",
            t: "course",
            f: true,
            u: "https://www.coursera.org/specializations/machine-learning-introduction",
          },
          {
            n: "Scikit-Learn User Guide",
            t: "docs",
            f: true,
            u: "https://scikit-learn.org/stable/user_guide.html",
          },
          {
            n: "Introduction to Statistical Learning (ISLP)",
            t: "book",
            f: true,
            u: "https://www.statlearning.com/",
          },
          {
            n: "Google ML Crash Course",
            t: "course",
            f: true,
            u: "https://developers.google.com/machine-learning/crash-course",
          },
        ],
        tip: "Andrew Ng's course is the gold standard. Use Scikit-Learn's documentation as your primary reference for implementation.",
      },
      {
        name: "Evaluation & Feature Engineering",
        icon: "📏",
        iconBg: "rgba(0,212,170,.2)",
        topics: [
          {
            t: "Train/Test Splits & Cross-Validation",
            tag: "must",
            tc: "#e94560",
          },
          { t: "Metrics: Accuracy, F1, ROC-AUC", tag: "core", tc: "#38bdf8" },
          { t: "Bias-Variance Tradeoff", tag: "theory", tc: "#f5a623" },
          {
            t: "Feature Scaling & One-Hot Encoding",
            tag: "data",
            tc: "#00d4aa",
          },
          { t: "Handling Imbalanced Data (SMOTE)", tag: "adv", tc: "#a78bfa" },
        ],
        resources: [
          {
            n: "StatQuest — ROC & AUC Explained",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/watch?v=4jRBRDbJemM",
          },
          {
            n: "Kaggle Learn — Feature Engineering",
            t: "course",
            f: true,
            u: "https://www.kaggle.com/learn/feature-engineering",
          },
          {
            n: "Weights & Biases — Exp Tracking",
            t: "platform",
            f: true,
            u: "https://wandb.ai/",
          },
        ],
        tip: "Rigorous evaluation separates hobbyists from engineers. Never touch your test set until the final model is ready.",
      },
    ],
  },
  {
    id: 2,
    label: "Phase 2",
    title: "Deep Learning & PyTorch",
    time: "2–3 months",
    color: "#e94560",
    colorBg: "rgba(233,69,96,.15)",
    sections: [
      {
        name: "Neural Networks (NN)",
        icon: "🧠",
        iconBg: "rgba(233,69,96,.2)",
        topics: [
          {
            t: "Perceptrons & Multi-Layer Perceptrons",
            tag: "core",
            tc: "#e94560",
          },
          {
            t: "Activation: ReLU, Sigmoid, Softmax",
            tag: "core",
            tc: "#e94560",
          },
          {
            t: "Backpropagation & Gradient Descent",
            tag: "must",
            tc: "#a78bfa",
          },
          { t: "Optimizers: Adam, AdamW, SGD", tag: "optim", tc: "#f5a623" },
          { t: "Loss: Cross-Entropy, MSE, BCE", tag: "core", tc: "#e94560" },
        ],
        resources: [
          {
            n: "Andrej Karpathy — Zero to Hero",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
          },
          {
            n: "Andrew Ng — Deep Learning Specialization",
            t: "course",
            f: true,
            u: "https://www.coursera.org/specializations/deep-learning",
          },
          {
            n: "Deep Learning Book (Goodfellow)",
            t: "book",
            f: true,
            u: "https://www.deeplearningbook.org/",
          },
        ],
        tip: "Watch Karpathy's Zero to Hero. He builds neural nets from scratch (micrograd), which is the single best way to learn.",
      },
      {
        name: "Deep learning Frameworks",
        icon: "🔥",
        iconBg: "rgba(245,166,35,.2)",
        topics: [
          {
            t: "PyTorch Basics: Tensors & Autograd",
            tag: "core",
            tc: "#f5a623",
          },
          { t: "nn.Module & Custom Architectures", tag: "core", tc: "#f5a623" },
          { t: "DataLoaders & Datasets", tag: "core", tc: "#f5a623" },
          { t: "CNNs for Computer Vision", tag: "arch", tc: "#38bdf8" },
          { t: "RNNs, LSTMs for Sequences", tag: "arch", tc: "#00d4aa" },
        ],
        resources: [
          {
            n: "Learn PyTorch for DL (Daniel Bourke)",
            t: "course",
            f: true,
            u: "https://www.learnpytorch.io/",
          },
          {
            n: "PyTorch Official Tutorials",
            t: "docs",
            f: true,
            u: "https://pytorch.org/tutorials/",
          },
          {
            n: "fast.ai — Deep Learning for Coders",
            t: "course",
            f: true,
            u: "https://course.fast.ai/",
          },
        ],
        tip: "Pick PyTorch for research and flexibility. fast.ai is great for a top-down approach, while Daniel Bourke is great for fundamentals.",
      },
    ],
  },
  {
    id: 3,
    label: "Phase 3",
    title: "Large Language Models (LLMs)",
    time: "2 months",
    color: "#f5a623",
    colorBg: "rgba(245,166,35,.15)",
    sections: [
      {
        name: "Transformer Architecture",
        icon: "⚡",
        iconBg: "rgba(245,166,35,.2)",
        topics: [
          {
            t: "Self-Attention (Q, K, V matrices)",
            tag: "must",
            tc: "#e94560",
          },
          {
            t: "Multi-Head Attention & Positional Encoding",
            tag: "core",
            tc: "#a78bfa",
          },
          { t: "Encoder vs Decoder (BERT vs GPT)", tag: "arch", tc: "#38bdf8" },
          { t: "Tokenization: BPE, WordPiece", tag: "core", tc: "#a78bfa" },
          {
            t: "KV Caching & Performance Optimization",
            tag: "adv",
            tc: "#00d4aa",
          },
        ],
        resources: [
          {
            n: "Illustrated Transformer (Jay Alammar)",
            t: "blog",
            f: true,
            u: "https://jalammar.github.io/illustrated-transformer/",
          },
          {
            n: "Attention Is All You Need (Paper)",
            t: "paper",
            f: true,
            u: "https://arxiv.org/abs/1706.03762",
          },
          {
            n: "Karpathy — Let's build GPT from scratch",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/watch?v=kCc8FmEb1nY",
          },
        ],
        tip: "The Jay Alammar blog post is iconic for a reason. Once you get the intuition, Karpathy's video will make you a master.",
      },
      {
        name: "Working with LLMs",
        icon: "🤖",
        iconBg: "rgba(167,139,250,.2)",
        topics: [
          { t: "Prompt Engineering (CoT, ReAct)", tag: "core", tc: "#a78bfa" },
          {
            t: "System Prompting & Structured Output",
            tag: "core",
            tc: "#a78bfa",
          },
          {
            t: "Temperature, Top-P, Top-K sampling",
            tag: "param",
            tc: "#f5a623",
          },
          {
            t: "OpenSource Models (Llama 3, Mistral, Qwen)",
            tag: "model",
            tc: "#38bdf8",
          },
          {
            t: "Proprietary APIs (OpenAI, Claude, Gemini)",
            tag: "api",
            tc: "#00d4aa",
          },
        ],
        resources: [
          {
            n: "DeepLearning.AI — Prompt Engineering",
            t: "course",
            f: true,
            u: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",
          },
          {
            n: "Hugging Face LLM Course",
            t: "course",
            f: true,
            u: "https://huggingface.co/learn/llm-course",
          },
          {
            n: "Anthropic — Prompt Engineering Guide",
            t: "docs",
            f: true,
            u: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering",
          },
        ],
        tip: "Don't just prompt—understand the sampling parameters. Hugging Face is your home for discovering and running open models.",
      },
    ],
  },
  {
    id: 4,
    label: "Phase 4",
    title: "Embeddings & Vector Databases",
    time: "1 month",
    color: "#00d4aa",
    colorBg: "rgba(0,212,170,.15)",
    sections: [
      {
        name: "Representing Knowledge",
        icon: "🔢",
        iconBg: "rgba(0,212,170,.2)",
        topics: [
          { t: "Embeddings: Contextual vs Static", tag: "core", tc: "#00d4aa" },
          {
            t: "Cosine Similarity & Distance Metrics",
            tag: "math",
            tc: "#f5a623",
          },
          {
            t: "Semantic Search & Recommendation",
            tag: "usecase",
            tc: "#38bdf8",
          },
          {
            t: "Dimensionality Reduction for Embeddings",
            tag: "adv",
            tc: "#a78bfa",
          },
        ],
        resources: [
          {
            n: "Cohere — LLM University (Embeddings)",
            t: "course",
            f: true,
            u: "https://docs.cohere.com/docs/llmu",
          },
          {
            n: "OpenAI — Embeddings API Docs",
            t: "docs",
            f: true,
            u: "https://platform.openai.com/docs/guides/embeddings",
          },
          {
            n: "Pinecone — Vector DB Fundamentals",
            t: "blog",
            f: true,
            u: "https://www.pinecone.io/learn/vector-database/",
          },
        ],
        tip: "Embeddings are the bridge between raw text and mathematical operations. Understand Cosine Similarity—it's the core of semantic search.",
      },
      {
        name: "Vector Storage",
        icon: "🗄️",
        iconBg: "rgba(56,189,248,.2)",
        topics: [
          { t: "Chroma (Open Source, Local)", tag: "tool", tc: "#38bdf8" },
          { t: "Pinecone (Cloud Native)", tag: "tool", tc: "#38bdf8" },
          { t: "Supabase Vector (pgvector)", tag: "tool", tc: "#38bdf8" },
          { t: "Indexing: HNSW, IVF-Flat", tag: "adv", tc: "#e94560" },
        ],
        resources: [
          {
            n: "Chroma DB Documentation",
            t: "docs",
            f: true,
            u: "https://docs.trychroma.com/",
          },
          {
            n: "Supabase — pgvector Guide",
            t: "docs",
            f: true,
            u: "https://supabase.com/docs/guides/ai",
          },
          {
            n: "FAISS — Facebook AI Similarity Search",
            t: "docs",
            f: true,
            u: "https://faiss.ai/",
          },
        ],
        tip: "Start with Chroma for local dev, then move to Supabase if you already use SQL, or Pinecone for a managed cloud experience.",
      },
    ],
  },
  {
    id: 5,
    label: "Phase 5",
    title: "RAG & Orchestration",
    time: "2 months",
    color: "#38bdf8",
    colorBg: "rgba(56,189,248,.15)",
    sections: [
      {
        name: "Retrieval Augmented Generation",
        icon: "📚",
        iconBg: "rgba(56,189,248,.2)",
        topics: [
          {
            t: "The RAG Pipeline: Chunking → Retrieve → Generate",
            tag: "must",
            tc: "#e94560",
          },
          {
            t: "Chunking Strategies (Recursive, Fixed, Semantic)",
            tag: "core",
            tc: "#38bdf8",
          },
          {
            t: "Hybrid Search (Keyword + Semantic)",
            tag: "adv",
            tc: "#a78bfa",
          },
          { t: "Reranking for Higher Accuracy", tag: "adv", tc: "#a78bfa" },
          {
            t: "Multi-Query & Sub-Query Decomposition",
            tag: "adv",
            tc: "#a78bfa",
          },
        ],
        resources: [
          {
            n: "LangChain Academy — RAG Course",
            t: "course",
            f: true,
            u: "https://academy.langchain.com/",
          },
          {
            n: "LlamaIndex Documentation",
            t: "docs",
            f: true,
            u: "https://docs.llamaindex.ai/",
          },
          {
            n: "DeepLearning.AI — Advanced RAG",
            t: "course",
            f: true,
            u: "https://www.deeplearning.ai/short-courses/advanced-retrieval-for-ai-with-chroma/",
          },
        ],
        tip: "RAG is the most common industry usecase for LLMs. Master chunking—bad chunks mean a bad AI, no matter how good the model is.",
      },
      {
        name: "Orchestration Frameworks",
        icon: "🔗",
        iconBg: "rgba(167,139,250,.2)",
        topics: [
          { t: "LangChain (The Ecosystem)", tag: "tool", tc: "#a78bfa" },
          { t: "LlamaIndex (Data Centric)", tag: "tool", tc: "#a78bfa" },
          {
            t: "LangGraph for Statefull Workflows",
            tag: "tool",
            tc: "#a78bfa",
          },
        ],
        resources: [
          {
            n: "LangChain Python Docs",
            t: "docs",
            f: true,
            u: "https://python.langchain.com/",
          },
          {
            n: "LlamaIndex — Data Framework for LLMs",
            t: "platform",
            f: true,
            u: "https://www.llamaindex.ai/",
          },
        ],
        tip: "Don't use these frameworks as a black box. Understand how they manage prompts and memory internally.",
      },
    ],
  },
  {
    id: 6,
    label: "Phase 6",
    title: "AI Agents & Advanced Topics",
    time: "2 months",
    color: "#a78bfa",
    colorBg: "rgba(167,139,250,.15)",
    sections: [
      {
        name: "Building AI Agents",
        icon: "🕵️",
        iconBg: "rgba(167,139,250,.2)",
        topics: [
          { t: "ReAct: Reasoning + Acting", tag: "core", tc: "#a78bfa" },
          { t: "Tool Use & Function Calling", tag: "must", tc: "#e94560" },
          {
            t: "Agent Memory: Short-term vs Long-term",
            tag: "core",
            tc: "#a78bfa",
          },
          {
            t: "Multi-Agent Orchestration (CrewAI)",
            tag: "adv",
            tc: "#38bdf8",
          },
          { t: "Planning & self-reflection", tag: "adv", tc: "#38bdf8" },
        ],
        resources: [
          {
            n: "DeepLearning.AI — AI Agents",
            t: "course",
            f: true,
            u: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/",
          },
          {
            n: "CrewAI Documentation",
            t: "docs",
            f: true,
            u: "https://docs.crewai.com/",
          },
          {
            n: "OpenAI — Function Calling Guide",
            t: "docs",
            f: true,
            u: "https://platform.openai.com/docs/guides/function-calling",
          },
        ],
        tip: "Agents are the future. Focus on 'Function Calling'—it's how LLMs actually DO things in the real world.",
      },
      {
        name: "Advanced AI Concepts",
        icon: "🚀",
        iconBg: "rgba(233,69,96,.2)",
        topics: [
          {
            t: "Multimodal AI (Vision, Audio, Video)",
            tag: "arch",
            tc: "#e94560",
          },
          { t: "Model Context Protocol (MCP)", tag: "tool", tc: "#00d4aa" },
          { t: "Fine-tuning: LoRA, QLoRA", tag: "tuning", tc: "#f5a623" },
        ],
        resources: [
          {
            n: "MCP — Official Website",
            t: "docs",
            f: true,
            u: "https://modelcontextprotocol.io/",
          },
          {
            n: "Unsloth — Fast Fine-tuning",
            t: "platform",
            f: true,
            u: "https://unsloth.ai/",
          },
        ],
        tip: "MCP is the new standard for connecting AI to your data. Fine-tuning is for style/format; RAG is for facts.",
      },
    ],
  },
  {
    id: 7,
    label: "Phase 7",
    title: "Evaluation & Deployment",
    time: "Ongoing",
    color: "#ffffff",
    colorBg: "rgba(255,255,255,.1)",
    sections: [
      {
        name: "LLM Ops & Evaluation",
        icon: "🔬",
        iconBg: "rgba(255,255,255,.2)",
        topics: [
          { t: "LLM-as-a-Judge Evaluation", tag: "must", tc: "#e94560" },
          {
            t: "Observability: LangSmith, Langfuse",
            tag: "tool",
            tc: "#38bdf8",
          },
          { t: "RAGAS — Evaluating RAG Pipelines", tag: "tool", tc: "#38bdf8" },
          { t: "AI Safety: Prompt Injection", tag: "safety", tc: "#f5a623" },
          { t: "Deployment: Ollama, vLLM", tag: "prod", tc: "#00d4aa" },
        ],
        resources: [
          {
            n: "LangSmith — LLM Debugging",
            t: "platform",
            f: true,
            u: "https://www.langchain.com/langsmith",
          },
          {
            n: "Langfuse — Open Source Observability",
            t: "platform",
            f: true,
            u: "https://langfuse.com/",
          },
          {
            n: "Ollama — Run Models Locally",
            t: "tool",
            f: true,
            u: "https://ollama.com/",
          },
        ],
        tip: "You can't improve what you can't measure. Use LangSmith or Langfuse from day one to trace your AI's reasoning.",
      },
    ],
  },
];
