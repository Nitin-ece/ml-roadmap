export interface Topic {
  t: string;
  tag: string;
  tc: string;
}

export interface Resource {
  n: string;
  t: "yt" | "course" | "book" | "docs" | "paper" | "platform" | "blog";
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
    title: "Prerequisites",
    time: "2–3 months",
    color: "#a78bfa",
    colorBg: "rgba(167,139,250,.15)",
    sections: [
      {
        name: "Python Fundamentals",
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
            t: "NumPy — vectorised array operations & broadcasting",
            tag: "data",
            tc: "#38bdf8",
          },
          {
            t: "Pandas — dataframes, groupby, merge & data wrangling",
            tag: "data",
            tc: "#38bdf8",
          },
          {
            t: "Matplotlib & Seaborn — visualisation",
            tag: "data",
            tc: "#38bdf8",
          },
          {
            t: "Jupyter Notebooks & environment setup",
            tag: "tool",
            tc: "#00d4aa",
          },
        ],
        resources: [
          {
            n: "Corey Schafer — Python Full Playlist",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/@coreyms/playlists",
          },
          {
            n: "freeCodeCamp — Scientific Python (full course)",
            t: "yt",
            f: true,
            u: "https://www.freecodecamp.org/learn/scientific-computing-with-python/",
          },
          {
            n: "freeCodeCamp — Data Analysis with Python (NumPy, Pandas, Matplotlib)",
            t: "course",
            f: true,
            u: "https://www.freecodecamp.org/learn/data-analysis-with-python/",
          },
          {
            n: "Official Python Tutorial (docs.python.org)",
            t: "docs",
            f: true,
            u: "https://docs.python.org/3/tutorial/",
          },
          {
            n: "Kaggle Learn — Python (free micro-course)",
            t: "course",
            f: true,
            u: "https://www.kaggle.com/learn/python",
          },
          {
            n: "Kaggle Learn — Pandas (hands-on notebooks)",
            t: "course",
            f: true,
            u: "https://www.kaggle.com/learn/pandas",
          },
          {
            n: "NumPy Official Documentation",
            t: "docs",
            f: true,
            u: "https://numpy.org/doc/stable/user/absolute_beginners.html",
          },
        ],
        tip: "Do freeCodeCamp's Python course first for syntax, then Kaggle's micro-courses for NumPy and Pandas — those are hands-on with notebooks. Corey Schafer is your go-to for OOP and deep-dive topics.",
      },
      {
        name: "Linear Algebra",
        icon: "📐",
        iconBg: "rgba(56,189,248,.2)",
        topics: [
          {
            t: "Vectors & vector spaces — intuition first",
            tag: "math",
            tc: "#f5a623",
          },
          {
            t: "Matrices, operations & transformations",
            tag: "math",
            tc: "#f5a623",
          },
          {
            t: "Matrix multiplication & dot products",
            tag: "math",
            tc: "#f5a623",
          },
          { t: "Eigenvectors & eigenvalues", tag: "math", tc: "#f5a623" },
          {
            t: "SVD (Singular Value Decomposition) — used in PCA",
            tag: "adv",
            tc: "#e94560",
          },
        ],
        resources: [
          {
            n: "3Blue1Brown — Essence of Linear Algebra (YouTube playlist)",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr",
          },
          {
            n: "MIT 18.06 — Gilbert Strang (full lectures, OCW)",
            t: "course",
            f: true,
            u: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/video_galleries/video-lectures/",
          },
          {
            n: "freeCodeCamp — Linear Algebra Full Course (12h)",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/watch?v=JnTa9XtvmfI",
          },
          {
            n: "MIT — Matrix Methods in Data Analysis, Signal Processing & ML",
            t: "course",
            f: true,
            u: "https://ocw.mit.edu/courses/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/",
          },
        ],
        tip: "3Blue1Brown is mandatory — watch it before anything else. It gives you the geometric intuition that makes all of linear algebra click. Then MIT 18.06 for rigour. Don't skip the problem sets.",
      },
      {
        name: "Calculus",
        icon: "∫",
        iconBg: "rgba(245,166,35,.2)",
        topics: [
          {
            t: "Derivatives & differentiation rules",
            tag: "math",
            tc: "#f5a623",
          },
          {
            t: "Chain rule — the engine of backpropagation",
            tag: "key",
            tc: "#e94560",
          },
          { t: "Partial derivatives", tag: "math", tc: "#f5a623" },
          { t: "Gradients & the gradient vector", tag: "key", tc: "#e94560" },
          { t: "Multivariable calculus basics", tag: "math", tc: "#f5a623" },
        ],
        resources: [
          {
            n: "3Blue1Brown — Essence of Calculus (YouTube playlist)",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNPOjrT6KVlfJuKtYTftqH6",
          },
          {
            n: "Khan Academy — Calculus (full, free)",
            t: "course",
            f: true,
            u: "https://www.khanacademy.org/math/calculus-1",
          },
          {
            n: "MIT OCW — Single Variable Calculus (18.01SC)",
            t: "course",
            f: true,
            u: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/",
          },
          {
            n: "MIT OCW — Multivariable Calculus (18.02SC)",
            t: "course",
            f: true,
            u: "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/",
          },
          {
            n: "MIT — Matrix Calculus for ML (free course)",
            t: "course",
            f: true,
            u: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/",
          },
        ],
        tip: "Focus 80% of your time on the chain rule and partial derivatives — everything else is secondary. The MIT Matrix Calculus for ML course is short and directly connects calculus to ML training.",
      },
      {
        name: "Statistics & Probability",
        icon: "📊",
        iconBg: "rgba(0,212,170,.2)",
        topics: [
          {
            t: "Descriptive stats — mean, variance, standard deviation",
            tag: "stats",
            tc: "#00d4aa",
          },
          {
            t: "Probability distributions — Normal, Bernoulli, Poisson",
            tag: "stats",
            tc: "#00d4aa",
          },
          {
            t: "Bayes' Theorem & conditional probability",
            tag: "key",
            tc: "#e94560",
          },
          {
            t: "Maximum Likelihood Estimation (MLE)",
            tag: "adv",
            tc: "#e94560",
          },
          {
            t: "Hypothesis testing, p-values & confidence intervals",
            tag: "stats",
            tc: "#00d4aa",
          },
          { t: "Correlation vs causation", tag: "stats", tc: "#00d4aa" },
        ],
        resources: [
          {
            n: "StatQuest with Josh Starmer (YouTube channel)",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/@statquest",
          },
          {
            n: "Khan Academy — Statistics & Probability (full, free)",
            t: "course",
            f: true,
            u: "https://www.khanacademy.org/math/statistics-probability",
          },
          {
            n: "Harvard — Introduction to Probability (edX, audit free)",
            t: "course",
            f: true,
            u: "https://www.edx.org/learn/probability/harvard-university-introduction-to-probability",
          },
          {
            n: "Think Stats — free book (Allen Downey)",
            t: "book",
            f: true,
            u: "https://greenteapress.com/thinkstats2/html/index.html",
          },
          {
            n: "Seeing Theory — interactive probability visuals",
            t: "blog",
            f: true,
            u: "https://seeing-theory.brown.edu/",
          },
        ],
        tip: "StatQuest is the single best stats resource on the internet. Watch every video in the Statistics Fundamentals and Machine Learning playlists. Josh explains things so well it feels like cheating.",
      },
    ],
  },
  {
    id: 1,
    label: "Phase 1",
    title: "ML Foundations",
    time: "2–3 months",
    color: "#38bdf8",
    colorBg: "rgba(56,189,248,.15)",
    sections: [
      {
        name: "Core ML Algorithms",
        icon: "⚙️",
        iconBg: "rgba(56,189,248,.2)",
        topics: [
          {
            t: "Linear Regression — cost function, gradient descent",
            tag: "core",
            tc: "#38bdf8",
          },
          {
            t: "Logistic Regression — sigmoid, cross-entropy loss",
            tag: "core",
            tc: "#38bdf8",
          },
          {
            t: "Regularisation — L1 (Lasso) & L2 (Ridge)",
            tag: "core",
            tc: "#38bdf8",
          },
          {
            t: "Decision Trees — splits, Gini, information gain",
            tag: "core",
            tc: "#38bdf8",
          },
          { t: "Random Forests & Bagging", tag: "ensemble", tc: "#a78bfa" },
          {
            t: "Gradient Boosting — XGBoost, LightGBM",
            tag: "ensemble",
            tc: "#a78bfa",
          },
          { t: "Support Vector Machines (SVM)", tag: "core", tc: "#38bdf8" },
          { t: "k-Means Clustering & DBSCAN", tag: "unsup", tc: "#00d4aa" },
          {
            t: "Principal Component Analysis (PCA)",
            tag: "unsup",
            tc: "#00d4aa",
          },
          {
            t: "Recommendation Systems — collaborative filtering",
            tag: "core",
            tc: "#38bdf8",
          },
        ],
        resources: [
          {
            n: "Andrew Ng — ML Specialization (Coursera, audit FREE)",
            t: "course",
            f: true,
            u: "https://www.coursera.org/specializations/machine-learning-introduction",
          },
          {
            n: "ISLP — Introduction to Statistical Learning (free PDF)",
            t: "book",
            f: true,
            u: "https://www.statlearning.com/",
          },
          {
            n: "StatQuest — Machine Learning playlist (YouTube)",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF",
          },
          {
            n: "MIT 6.S897 — Machine Learning for Healthcare (OCW, free)",
            t: "course",
            f: true,
            u: "https://ocw.mit.edu/courses/6-s897-machine-learning-for-healthcare-spring-2019/",
          },
          {
            n: "Google ML Crash Course (free, interactive)",
            t: "course",
            f: true,
            u: "https://developers.google.com/machine-learning/crash-course",
          },
        ],
        tip: "Andrew Ng's course + ISLP book together is one of the most powerful combos in ML education. Audit the Coursera course (100% free) and read the corresponding ISLP chapters simultaneously. The Google ML Crash Course is great for reinforcing concepts with exercises.",
      },
      {
        name: "Model Evaluation & Validation",
        icon: "📏",
        iconBg: "rgba(0,212,170,.2)",
        topics: [
          {
            t: "Train / validation / test splits — why 3 splits?",
            tag: "must",
            tc: "#e94560",
          },
          {
            t: "Cross-validation — k-fold, stratified k-fold",
            tag: "must",
            tc: "#e94560",
          },
          { t: "Bias–variance tradeoff", tag: "must", tc: "#e94560" },
          {
            t: "Metrics — accuracy, precision, recall, F1, AUC-ROC",
            tag: "core",
            tc: "#38bdf8",
          },
          {
            t: "Confusion matrix & classification reports",
            tag: "core",
            tc: "#38bdf8",
          },
          {
            t: "Learning curves — diagnosing overfitting/underfitting",
            tag: "core",
            tc: "#38bdf8",
          },
        ],
        resources: [
          {
            n: "StatQuest — ROC & AUC explained (YouTube)",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/watch?v=4jRBRDbJemM",
          },
          {
            n: "Scikit-Learn — Model Evaluation Guide (docs)",
            t: "docs",
            f: true,
            u: "https://scikit-learn.org/stable/modules/model_evaluation.html",
          },
        ],
        tip: "Rigorous evaluation separates toy projects from real engineering. Master cross-validation and understand WHY the test set must never be touched until the very end. This protects you from data leakage — the most common silent killer in ML.",
      },
    ],
  },
  {
    id: 2,
    label: "Phase 2",
    title: "Practical ML",
    time: "1–2 months",
    color: "#00d4aa",
    colorBg: "rgba(0,212,170,.15)",
    sections: [
      {
        name: "Scikit-Learn Mastery",
        icon: "🔧",
        iconBg: "rgba(0,212,170,.2)",
        topics: [
          {
            t: "Preprocessing — StandardScaler, MinMaxScaler, OneHotEncoder",
            tag: "core",
            tc: "#00d4aa",
          },
          {
            t: "Feature engineering — creation, selection, extraction",
            tag: "core",
            tc: "#00d4aa",
          },
          {
            t: "Pipeline objects — prevent data leakage",
            tag: "key",
            tc: "#e94560",
          },
          {
            t: "Hyperparameter tuning — GridSearchCV, RandomizedSearchCV",
            tag: "optim",
            tc: "#a78bfa",
          },
          {
            t: "Ensemble methods — VotingClassifier, StackingClassifier",
            tag: "adv",
            tc: "#a78bfa",
          },
          {
            t: "Imbalanced datasets — SMOTE, class weights",
            tag: "adv",
            tc: "#a78bfa",
          },
        ],
        resources: [
          {
            n: "Scikit-Learn — Official Documentation & User Guide",
            t: "docs",
            f: true,
            u: "https://scikit-learn.org/stable/user_guide.html",
          },
          {
            n: "Kaggle Learn — Intermediate ML (free micro-course)",
            t: "course",
            f: true,
            u: "https://www.kaggle.com/learn/intermediate-machine-learning",
          },
          {
            n: "Kaggle Learn — Feature Engineering (free)",
            t: "course",
            f: true,
            u: "https://www.kaggle.com/learn/feature-engineering",
          },
          {
            n: "DataTalks.Club — ML Zoomcamp (free, production ML)",
            t: "course",
            f: true,
            u: "https://datatalks.club/blog/guide-to-free-online-courses-at-datatalks-club.html",
          },
        ],
        tip: "Build sklearn Pipelines from day one — not just for cleanliness but to prevent data leakage. Also do the DataTalks ML Zoomcamp: it's free and covers deploying ML models with Docker and FastAPI, which most courses skip entirely.",
      },
      {
        name: "Build These Projects 🏗️",
        icon: "🚀",
        iconBg: "rgba(245,166,35,.2)",
        topics: [
          {
            t: "House Price Prediction — Kaggle (regression, feature engineering)",
            tag: "proj",
            tc: "#f5a623",
          },
          {
            t: "Titanic Survival — your first Kaggle competition",
            tag: "proj",
            tc: "#f5a623",
          },
          {
            t: "Spam Email Classifier (TF-IDF + logistic regression)",
            tag: "proj",
            tc: "#f5a623",
          },
          {
            t: "Customer Churn Prediction (imbalanced, business framing)",
            tag: "proj",
            tc: "#f5a623",
          },
          {
            t: "Credit Card Fraud Detection (anomaly + evaluation mastery)",
            tag: "proj",
            tc: "#f5a623",
          },
          {
            t: "Movie Recommendation System (collaborative filtering)",
            tag: "proj",
            tc: "#f5a623",
          },
        ],
        resources: [
          {
            n: "Kaggle — Competitions & Datasets (free)",
            t: "platform",
            f: true,
            u: "https://www.kaggle.com/",
          },
          {
            n: "UCI ML Repository — Free Datasets",
            t: "platform",
            f: true,
            u: "https://archive.ics.uci.edu/",
          },
          {
            n: "Papers with Code — Benchmarks & Datasets",
            t: "platform",
            f: true,
            u: "https://paperswithcode.com/",
          },
          {
            n: "Google Colab — Free GPU Notebooks",
            t: "platform",
            f: true,
            u: "https://colab.research.google.com/",
          },
        ],
        tip: "Projects are your portfolio. Every finished project is proof no certificate can replace. Read top Kaggle notebooks for the first competition — you'll learn more from 10 notebooks than 10 hours of videos.",
      },
    ],
  },
  {
    id: 3,
    label: "Phase 3",
    title: "Deep Learning",
    time: "2–3 months",
    color: "#e94560",
    colorBg: "rgba(233,69,96,.15)",
    sections: [
      {
        name: "Neural Network Foundations",
        icon: "🧠",
        iconBg: "rgba(233,69,96,.2)",
        topics: [
          {
            t: "Perceptrons & multi-layer networks (MLPs)",
            tag: "core",
            tc: "#e94560",
          },
          {
            t: "Activation functions — ReLU, Sigmoid, Tanh, GELU, SiLU",
            tag: "core",
            tc: "#e94560",
          },
          {
            t: "Forward propagation — step by step",
            tag: "core",
            tc: "#e94560",
          },
          {
            t: "Backpropagation — derive gradients manually at least once",
            tag: "must",
            tc: "#a78bfa",
          },
          {
            t: "Loss functions — MSE, cross-entropy, BCE",
            tag: "core",
            tc: "#e94560",
          },
          {
            t: "Optimisers — SGD, Momentum, Adam, AdamW",
            tag: "optim",
            tc: "#f5a623",
          },
          {
            t: "Batch normalisation, dropout, weight initialisation",
            tag: "optim",
            tc: "#f5a623",
          },
          {
            t: "Learning rate schedules & warm restarts",
            tag: "adv",
            tc: "#f5a623",
          },
        ],
        resources: [
          {
            n: "Andrew Ng — Deep Learning Specialization (Coursera, audit free)",
            t: "course",
            f: true,
            u: "https://www.coursera.org/specializations/deep-learning",
          },
          {
            n: "Andrej Karpathy — Neural Nets: Zero to Hero (YouTube playlist)",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
          },
          {
            n: "Deep Learning Book — Goodfellow et al. (free online)",
            t: "book",
            f: true,
            u: "https://www.deeplearningbook.org/",
          },
          {
            n: "fast.ai — Practical Deep Learning for Coders (free course)",
            t: "course",
            f: true,
            u: "https://course.fast.ai/",
          },
          {
            n: "3Blue1Brown — Neural Networks series (YouTube)",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
          },
        ],
        tip: "Karpathy's Zero to Hero is the best deep learning resource ever made. He builds micrograd → makemore → GPT from scratch. Mandatory. Also do fast.ai — it teaches top-down (build first, understand later) which is a powerful complement to Andrew Ng's bottom-up approach.",
      },
      {
        name: "CNNs — Computer Vision",
        icon: "🖼️",
        iconBg: "rgba(56,189,248,.2)",
        topics: [
          {
            t: "Convolution layers — filters, padding, stride, receptive field",
            tag: "core",
            tc: "#38bdf8",
          },
          {
            t: "Pooling layers, flattening & fully connected layers",
            tag: "core",
            tc: "#38bdf8",
          },
          {
            t: "Classic architectures — LeNet, AlexNet, VGG, ResNet, EfficientNet",
            tag: "arch",
            tc: "#a78bfa",
          },
          {
            t: "Transfer learning & fine-tuning pretrained models",
            tag: "key",
            tc: "#e94560",
          },
          { t: "Data augmentation strategies", tag: "core", tc: "#38bdf8" },
        ],
        resources: [
          {
            n: "Stanford CS231n — CNNs for Visual Recognition (free lectures)",
            t: "course",
            f: true,
            u: "http://cs231n.stanford.edu/",
          },
          {
            n: "CS231n YouTube Playlist (2017 edition)",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv",
          },
          {
            n: "PyTorch Transfer Learning Tutorial",
            t: "docs",
            f: true,
            u: "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html",
          },
        ],
        tip: "Stanford CS231n is one of the best courses on the internet — period. Even if you only watch the first 8 lectures you'll understand CNNs more deeply than most practitioners.",
      },
      {
        name: "RNNs, LSTMs & Attention",
        icon: "🔄",
        iconBg: "rgba(0,212,170,.2)",
        topics: [
          {
            t: "RNNs — sequential processing & vanishing gradient",
            tag: "core",
            tc: "#00d4aa",
          },
          {
            t: "LSTMs — cell state, gates, long-term memory",
            tag: "core",
            tc: "#00d4aa",
          },
          { t: "GRUs — simplified gating", tag: "core", tc: "#00d4aa" },
          {
            t: "Seq2Seq models & encoder-decoder architecture",
            tag: "adv",
            tc: "#e94560",
          },
          {
            t: "Attention mechanism — the problem transformers solve",
            tag: "key",
            tc: "#a78bfa",
          },
        ],
        resources: [
          {
            n: "Andrej Karpathy — makemore (character-level RNN, YouTube)",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/watch?v=PaCmpygFfXo",
          },
          {
            n: "Colah's Blog — Understanding LSTMs (iconic post)",
            t: "blog",
            f: true,
            u: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/",
          },
          {
            n: "Deep Learning Specialization — Course 5: Sequence Models",
            t: "course",
            f: true,
            u: "https://www.coursera.org/learn/nlp-sequence-models",
          },
        ],
        tip: "Read Colah's LSTM blog post. It's 10 years old and still the clearest explanation of LSTMs in existence. When you understand WHY attention was invented (the RNN bottleneck), transformers suddenly make complete sense.",
      },
    ],
  },
  {
    id: 4,
    label: "Phase 4",
    title: "PyTorch",
    time: "1–2 months",
    color: "#f5a623",
    colorBg: "rgba(245,166,35,.15)",
    sections: [
      {
        name: "PyTorch Core",
        icon: "🔥",
        iconBg: "rgba(245,166,35,.2)",
        topics: [
          {
            t: "Tensors — creation, ops, slicing, broadcasting",
            tag: "core",
            tc: "#f5a623",
          },
          {
            t: "Autograd — computational graphs, .backward(), grad accumulation",
            tag: "must",
            tc: "#e94560",
          },
          {
            t: "nn.Module — building custom models step by step",
            tag: "core",
            tc: "#f5a623",
          },
          {
            t: "DataLoader & Dataset — batching, shuffling, augmentation",
            tag: "core",
            tc: "#f5a623",
          },
          {
            t: "Training loops — zero_grad, forward, backward, step",
            tag: "core",
            tc: "#f5a623",
          },
          {
            t: "GPU training — .to(device), CUDA memory management",
            tag: "prod",
            tc: "#a78bfa",
          },
          {
            t: "Model checkpointing — save/load state_dict",
            tag: "prod",
            tc: "#a78bfa",
          },
          {
            t: "Mixed precision training — torch.cuda.amp",
            tag: "adv",
            tc: "#a78bfa",
          },
        ],
        resources: [
          {
            n: "Andrej Karpathy — Neural Nets: Zero to Hero (builds PyTorch from scratch)",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
          },
          {
            n: "Daniel Bourke — Learn PyTorch for Deep Learning (free)",
            t: "course",
            f: true,
            u: "https://www.learnpytorch.io/",
          },
          {
            n: "PyTorch Official Tutorials (docs)",
            t: "docs",
            f: true,
            u: "https://pytorch.org/tutorials/",
          },
          {
            n: "fast.ai — Practical Deep Learning Part 2 (PyTorch foundations)",
            t: "course",
            f: true,
            u: "https://course.fast.ai/Lessons/part2.html",
          },
          {
            n: "PyTorch Internals — Horace He's blog post (deep dive)",
            t: "blog",
            f: true,
            u: "http://blog.ezyang.com/2019/05/pytorch-internals/",
          },
        ],
        tip: "Daniel Bourke's learnpytorch.io is exceptional — it's structured like a textbook but free online. Karpathy's Zero to Hero series implements PyTorch-equivalent code from scratch first, then switches to PyTorch. Do both.",
      },
      {
        name: "PyTorch Projects",
        icon: "🏗️",
        iconBg: "rgba(233,69,96,.2)",
        topics: [
          {
            t: "Custom training loop with validation, early stopping & logging",
            tag: "proj",
            tc: "#f5a623",
          },
          {
            t: "Image classifier on CIFAR-10 or custom dataset",
            tag: "proj",
            tc: "#f5a623",
          },
          {
            t: "Transfer learning — fine-tune ResNet50 on custom data",
            tag: "proj",
            tc: "#f5a623",
          },
          {
            t: "Text sentiment analysis with LSTM",
            tag: "proj",
            tc: "#f5a623",
          },
          {
            t: "Experiment tracking with Weights & Biases",
            tag: "proj",
            tc: "#f5a623",
          },
        ],
        resources: [
          {
            n: "Weights & Biases — Free Account & Tutorials",
            t: "platform",
            f: true,
            u: "https://wandb.ai/",
          },
          {
            n: "Papers with Code — SOTA Benchmarks",
            t: "platform",
            f: true,
            u: "https://paperswithcode.com/",
          },
          {
            n: "Kaggle — Computer Vision Competitions",
            t: "platform",
            f: true,
            u: "https://www.kaggle.com/competitions?search=computer+vision",
          },
        ],
        tip: "After every project, delete your code and rebuild it from scratch. The second implementation will be twice as fast and three times as clean. This is the fastest way to genuinely internalise PyTorch.",
      },
    ],
  },
  {
    id: 5,
    label: "Phase 5",
    title: "LLMs & GenAI",
    time: "2–3 months",
    color: "#a78bfa",
    colorBg: "rgba(167,139,250,.15)",
    sections: [
      {
        name: "Transformer Architecture",
        icon: "⚡",
        iconBg: "rgba(167,139,250,.2)",
        topics: [
          {
            t: "Tokenisation — BPE, WordPiece, SentencePiece",
            tag: "core",
            tc: "#a78bfa",
          },
          { t: "Token & positional embeddings", tag: "core", tc: "#a78bfa" },
          {
            t: "Self-attention — Q, K, V matrices from scratch",
            tag: "must",
            tc: "#e94560",
          },
          {
            t: "Scaled dot-product attention — the math",
            tag: "must",
            tc: "#e94560",
          },
          {
            t: "Multi-head attention — why multiple heads?",
            tag: "must",
            tc: "#e94560",
          },
          {
            t: "Feed-forward sublayers & layer normalisation",
            tag: "core",
            tc: "#a78bfa",
          },
          {
            t: "GPT architecture — decoder-only transformers",
            tag: "arch",
            tc: "#38bdf8",
          },
          {
            t: "BERT architecture — encoder-only transformers",
            tag: "arch",
            tc: "#38bdf8",
          },
          {
            t: "Scaling laws — Chinchilla, compute-optimal training",
            tag: "theory",
            tc: "#00d4aa",
          },
        ],
        resources: [
          {
            n: "Attention Is All You Need — Original Paper (free, arXiv)",
            t: "paper",
            f: true,
            u: "https://arxiv.org/abs/1706.03762",
          },
          {
            n: "Jay Alammar — The Illustrated Transformer (blog)",
            t: "blog",
            f: true,
            u: "https://jalammar.github.io/illustrated-transformer/",
          },
          {
            n: "Andrej Karpathy — Build a GPT from scratch (YouTube)",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/watch?v=kCc8FmEb1nY",
          },
          {
            n: "Andrej Karpathy — GPT Tokenizer from scratch (YouTube)",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/watch?v=zduSFxRajkE",
          },
          {
            n: "Sebastian Raschka — LLMs From Scratch (GitHub + free book)",
            t: "book",
            f: true,
            u: "https://github.com/rasbt/LLMs-from-scratch",
          },
          {
            n: "Stanford CS25 — Transformers United (YouTube, free)",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/playlist?list=PLoROMvodv4rNiJRchCzutFw5ItR_Z27CM",
          },
          {
            n: "DeepLearning.AI — How Transformer LLMs Work (free)",
            t: "course",
            f: true,
            u: "https://www.deeplearning.ai/courses/how-transformer-llms-work/",
          },
        ],
        tip: "Jay Alammar's Illustrated Transformer is the best visual introduction. Then read the original paper. Then build it from scratch with Karpathy. Then read Raschka's book which builds the full GPT-2. By the end you will understand every token of GPT-4's architecture.",
      },
      {
        name: "Training & Fine-tuning LLMs",
        icon: "🎯",
        iconBg: "rgba(233,69,96,.2)",
        topics: [
          {
            t: "Pre-training — data, tokenization, compute budgets",
            tag: "theory",
            tc: "#00d4aa",
          },
          {
            t: "Supervised Fine-Tuning (SFT) on instruction datasets",
            tag: "core",
            tc: "#a78bfa",
          },
          {
            t: "RLHF — reward models, PPO, constitutional AI",
            tag: "adv",
            tc: "#e94560",
          },
          {
            t: "LoRA — Low-Rank Adaptation (parameter-efficient tuning)",
            tag: "key",
            tc: "#a78bfa",
          },
          {
            t: "QLoRA — quantised LoRA for consumer GPUs",
            tag: "key",
            tc: "#a78bfa",
          },
          {
            t: "Prompt engineering — zero-shot, few-shot, CoT, ReAct",
            tag: "practical",
            tc: "#38bdf8",
          },
          {
            t: "Evaluation — MMLU, HumanEval, LLM-as-judge, RAGAS",
            tag: "must",
            tc: "#e94560",
          },
        ],
        resources: [
          {
            n: "HuggingFace LLM Course (free, comprehensive)",
            t: "course",
            f: true,
            u: "https://huggingface.co/learn/llm-course/en/chapter1/1",
          },
          {
            n: "HuggingFace NLP Course (free, transformers library)",
            t: "course",
            f: true,
            u: "https://huggingface.co/learn/nlp-course/",
          },
          {
            n: "LoRA Paper (fine-tuning at scale, arXiv)",
            t: "paper",
            f: true,
            u: "https://arxiv.org/abs/2106.09685",
          },
          {
            n: "DeepLearning.AI — Finetuning LLMs (free short course)",
            t: "course",
            f: true,
            u: "https://www.deeplearning.ai/short-courses/finetuning-large-language-models/",
          },
          {
            n: "Andrej Karpathy — Intro to LLMs (1hr YouTube lecture)",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/watch?v=zjkBMFhNj_g",
          },
          {
            n: "LLM University by Cohere (free, 8 modules)",
            t: "course",
            f: true,
            u: "https://docs.cohere.com/docs/llmu",
          },
          {
            n: "Maxime Labonne — LLM Course (GitHub roadmap + notebooks)",
            t: "course",
            f: true,
            u: "https://github.com/mlabonne/llm-course",
          },
        ],
        tip: "LoRA + QLoRA changed everything. You can now fine-tune a 7B model on a free Google Colab T4 GPU. HuggingFace's LLM course is the most up-to-date free resource for this. Karpathy's 1-hour LLM intro lecture is mandatory viewing — watch it twice.",
      },
    ],
  },
  {
    id: 6,
    label: "Phase 6",
    title: "AI Engineering",
    time: "2–3 months",
    color: "#00d4aa",
    colorBg: "rgba(0,212,170,.15)",
    sections: [
      {
        name: "RAG — Retrieval-Augmented Generation",
        icon: "🔍",
        iconBg: "rgba(0,212,170,.2)",
        topics: [
          {
            t: "Embeddings for retrieval — semantic similarity",
            tag: "core",
            tc: "#00d4aa",
          },
          {
            t: "Vector databases — Chroma, Pinecone, Weaviate, Qdrant, FAISS",
            tag: "core",
            tc: "#00d4aa",
          },
          {
            t: "Chunking strategies — fixed, semantic, hierarchical",
            tag: "core",
            tc: "#00d4aa",
          },
          {
            t: "Retrieval — dense, sparse (BM25), hybrid",
            tag: "core",
            tc: "#00d4aa",
          },
          {
            t: "Reranking — cross-encoders, Cohere reranker",
            tag: "adv",
            tc: "#a78bfa",
          },
          {
            t: "Advanced RAG — HyDE, multi-query, parent-child",
            tag: "adv",
            tc: "#a78bfa",
          },
          {
            t: "RAG evaluation — RAGAS, TruLens, recall@k, MRR",
            tag: "must",
            tc: "#e94560",
          },
        ],
        resources: [
          {
            n: "LangChain — RAG from Scratch YouTube Playlist (free)",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x",
          },
          {
            n: "LangChain — Official Documentation",
            t: "docs",
            f: true,
            u: "https://python.langchain.com/",
          },
          {
            n: "LlamaIndex — Official Documentation",
            t: "docs",
            f: true,
            u: "https://docs.llamaindex.ai/",
          },
          {
            n: "DeepLearning.AI — LangChain: Chat with Your Data (free)",
            t: "course",
            f: true,
            u: "https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/",
          },
          {
            n: "DeepLearning.AI — Building & Evaluating Advanced RAG (free)",
            t: "course",
            f: true,
            u: "https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/",
          },
          {
            n: "Activeloop — RAG with LangChain & LlamaIndex (free, 43 lessons)",
            t: "course",
            f: true,
            u: "https://learn.activeloop.ai/courses/rag",
          },
          {
            n: "freeCodeCamp — Production RAG with LangChain (YouTube)",
            t: "yt",
            f: true,
            u: "https://www.youtube.com/watch?v=mHxLXzYjQRE",
          },
        ],
        tip: "Evaluation is the hardest part of RAG — not building it. Anyone can pipe an LLM to a vector DB in an afternoon. Measuring whether it actually works (RAGAS, context recall, answer relevance) is what separates engineers from tinkerers.",
      },
      {
        name: "Graph RAG & Knowledge Graphs",
        icon: "🕸️",
        iconBg: "rgba(167,139,250,.2)",
        topics: [
          {
            t: "Graph databases — property graphs, nodes, relationships",
            tag: "core",
            tc: "#a78bfa",
          },
          { t: "Neo4j & Cypher query language", tag: "core", tc: "#a78bfa" },
          {
            t: "Knowledge graph construction from unstructured text",
            tag: "adv",
            tc: "#e94560",
          },
          {
            t: "Microsoft GraphRAG — community summaries approach",
            tag: "adv",
            tc: "#e94560",
          },
          {
            t: "Graph RAG vs vector RAG — when to use which",
            tag: "adv",
            tc: "#e94560",
          },
        ],
        resources: [
          {
            n: "Neo4j Graph Academy — Full Free Courses",
            t: "course",
            f: true,
            u: "https://graphacademy.neo4j.com/",
          },
          {
            n: "Microsoft GraphRAG — Paper (arXiv)",
            t: "paper",
            f: true,
            u: "https://arxiv.org/abs/2404.16130",
          },
          {
            n: "DeepLearning.AI — Knowledge Graphs for RAG (free)",
            t: "course",
            f: true,
            u: "https://www.deeplearning.ai/short-courses/knowledge-graphs-rag/",
          },
          {
            n: "LangChain — Neo4j Integration Tutorial",
            t: "docs",
            f: true,
            u: "https://python.langchain.com/docs/integrations/graphs/neo4j_cypher/",
          },
        ],
        tip: "Graph RAG wins when questions require multi-hop reasoning — connecting facts across documents that aren't semantically similar. Microsoft's GraphRAG paper is short and worth reading to understand the architecture.",
      },
      {
        name: "MLOps, Production & Career",
        icon: "⚙️",
        iconBg: "rgba(245,166,35,.2)",
        topics: [
          {
            t: "Experiment tracking — MLflow, Weights & Biases",
            tag: "prod",
            tc: "#f5a623",
          },
          {
            t: "Model serving — FastAPI, vLLM, TorchServe, BentoML",
            tag: "prod",
            tc: "#f5a623",
          },
          {
            t: "Containerisation — Docker for ML models",
            tag: "prod",
            tc: "#f5a623",
          },
          {
            t: "LLM inference optimisation — quantisation, KV cache, batching",
            tag: "adv",
            tc: "#e94560",
          },
          {
            t: "Monitoring — data drift, concept drift, alerting",
            tag: "prod",
            tc: "#f5a623",
          },
          {
            t: "DSA — NeetCode 150 (do alongside all phases!)",
            tag: "career",
            tc: "#38bdf8",
          },
          {
            t: "System design for ML — ML system design interviews",
            tag: "career",
            tc: "#38bdf8",
          },
        ],
        resources: [
          {
            n: "Full Stack Deep Learning (LLM Bootcamp, free)",
            t: "course",
            f: true,
            u: "https://fullstackdeeplearning.com/",
          },
          {
            n: "DataTalks.Club — MLOps Zoomcamp (free)",
            t: "course",
            f: true,
            u: "https://github.com/DataTalksClub/mlops-zoomcamp",
          },
          {
            n: "NeetCode 150 — DSA (free)",
            t: "platform",
            f: true,
            u: "https://neetcode.io/",
          },
          {
            n: "LeetCode — (free tier, 300–500 problems target)",
            t: "platform",
            f: true,
            u: "https://leetcode.com/",
          },
          {
            n: "Weights & Biases Courses (MLOps & LLM apps, free)",
            t: "course",
            f: true,
            u: "https://www.wandb.courses/",
          },
          {
            n: "Chip Huyen — Machine Learning Systems Design (free book)",
            t: "book",
            f: true,
            u: "https://huyenchip.com/machine-learning-systems-design/toc.html",
          },
          {
            n: "Made With ML — MLOps Course (free, Goku Mohandas)",
            t: "course",
            f: true,
            u: "https://madewithml.com/",
          },
        ],
        tip: "Your senior is right. In 2026 AI/ML interviews test ML knowledge AND coding. Start NeetCode 150 in Phase 2 — one problem a day. Made With ML by Goku Mohandas covers the full ML lifecycle in production and is one of the most underrated free resources out there.",
      },
    ],
  },
];
