const profileData = {
  title: "Resume",
  name: "Tushar Kumar",
  sub_title: "",
  logoURL: "assets/images/dp.jpg",
  about: {
    intro: `I am an innovative and passionate developer with a primary interest in <strong>JavaScript</strong>
     and its applications. Experienced in designing and implementing sophisticated UI/UX with
      Progressive Web Application standards.`,
    contact: {
      email: "kumartushar78867@gmail.com",
      phone: "+91-8057184462",
      address: "Modinagar,Ghaziabad(UP)",
    },
  },

  links: [
    {
      // <i class="fas fa-external-link-alt"></i>
      title: `LinkedIn <a href="https://www.linkedin.com/in/tushar-kumar-670986226/" target="__blank"><strong style="color: rgb(49, 115, 187);"><i class = "fas fa-external-link-alt"><i></strong></a>`,
      // src: "https://www.linkedin.com/in/tushar-kumar-670986226/",
      src: ``,
    },

    // <a href="https://www.naukri.com/code360/profile/a16a43e2-a08b-43d7-8158-0ec0b06fae14" target="__blank"><strong style="color: rgb(0, 145, 255);"><i class = "fas fa-external-link-alt"><i></strong></a>

    {
      title: `Github <a href="https://github.com/kumartusha" target="__blank"><strong style="color: rgb(49, 115, 187);"><i class = "fas fa-external-link-alt"><i></strong></a>`,
      src: ``,
    },
    {
      title: `Hacker Rank <a href="https://www.hackerrank.com/profile/kumartushar78867" target="__blank"><strong style="color: rgb(49, 115, 187);"><i class = "fas fa-external-link-alt"><i></strong></a>`,
      src: "",
    },
    {
      title: `Code Studio <a href="https://www.naukri.com/code360/profile/a16a43e2-a08b-43d7-8158-0ec0b06fae14" target="__blank"><strong style="color: rgb(49, 115, 187);"><i class = "fas fa-external-link-alt"><i></strong></a>`,
      src: "",
    },
  ],

  certifications: [
    {
      desc: `
      Intro of <strong>AI-ML</strong> by <strong>LinkedIn Learning</strong>.
      <a href="https://www.linkedin.com/learning/certificates/bf3c6b8b73b14bc368dd9051db219dc62712f5c4acda333f4469f9fa5fd22235?trk=share_certificate" target="__blank"><strong style="color: rgb(49, 115, 187);"><i class = "fas fa-external-link-alt"><i></strong></a>`,
      date: "",
    },
    {
      desc: ` <strong>Git & Github</strong> by <strong>IBM</strong> Skill Build.
      <a href="https://skills.yourlearning.ibm.com/certificate/share/ff2a17f859ewogICJsZWFybmVyQ05VTSIgOiAiMTcxNjU2OVJFRyIsCiAgIm9iamVjdFR5cGUiIDogIkFDVElWSVRZIiwKICAib2JqZWN0SWQiIDogIlVSTC1SR09KNVlIN0VWSyIKfQ36f68afcbd-10" target="__blank"><strong style="color: rgb(49, 115, 187);"><i class = "fas fa-external-link-alt"><i></strong></a>`,
      date: "",
    },
  ],

  certifications2: [
    {
      desc: `Google Cloud <strong>Arcade</strong> Volunteer`,
      date: "",
    },
    {
      desc: `<strong>Event Coordination</strong> for College Functions and Activities`,
      date: "",
    },
  ],

  //   Add the new Hobbies Array..
  hobbies: [
    {
      desc: `Listening Music`,
      date: "",
    },
    {
      desc: `<strong>C++</strong> Fundamentals by Coding Ninjas.`,
      date: "",
    },
  ],

  education: [
    {
      alma: "Dr. K. N. Modi Institute of Engineering and Technology",
      duration: "2021 - 2025",
      std: "B.Tech. (Computer Science & Engineering)",
      score: "8.25 SGPA",
    },
    {
      alma: "Tulsi Ram Maheshwari Public School (CBSE)",
      duration: "2020 - 2021",
      std: "Class XII (PCM)",
      score: "78.2 %",
    },
    {
      alma: "Tulsi Ram Maheshwari Public School (CBSE)",
      duration: "2019 - 2020",
      std: "Class X (PCM)",
      score: "63.8 %",
    },
  ],

  skills: [
    {
      category: "Languages,Library & Technique",
      topics: [
        "HTML5",
        "CSS3",
        "SQL",
        "Flask",
        "Streamlit",
        "Pandas",
        "MatplotLib",
        "Seaborn",
        "Langchain",
        "Scikit-learn",
        "NLP",
        "Tensorflow",
      ],
    },
    {
      category: "Programming Languages",
      topics: ["C++", "Python"],
    },
    {
      category: "Development Tools & Services",
      topics: [
        "Visual Studio Code",
        "Git & GitHub",
        "Google Collab",
        "Vercel",
        "Amazon Web Services (AWS)",
        "PowerBI",
        "Jupyter Notebook",
      ],
    },
    {
      category: "Course Work",
      topics: [
        "Artificial Intelligence(AI)",
        "Machine Learning Algorithms",
        "Data Structures and Algorithms",
        "Object Oriented Programming",
        // "Data Analysis & Visualization",
      ],
    },
  ],
  // hobbies: [
  //   {
  //     category: "Course Work",
  //     topics: [
  //       "Data Structures and Algorithm",
  //       "Object-Oriented Programming (OOP)",
  //     ],
  //   },
  // ],
  projects: [
    {
      title: `GenAI Cold Email Generator Model <a href="https://github.com/kumartusha/HR_Analytics_DashBoard" target="__blank"><strong style="color: rgb(49, 115, 187);"><i class = "fas fa-external-link-alt"><i></strong></a>`,
      duration: "",
      desc: `▪ Built an LLM & Gen AI project using <strong>Llama 3.1</strong> (LLM), <strong>Chromadb</strong> as a vector store, and <strong>LangChain</strong> for powerful processing.<br>
▪ Developed with <strong>Streamlit</strong> to help software and <strong>AI services</strong> companies send personalized cold emails to potential clients.<br>
▪ Leveraged <strong>LangChain</strong> and <strong>Chromadb</strong> to enhance email generation with relevant data.`,
    },
    {
      title: `Neurodegenerative Disorder Prediction System <a href="https://github.com/kumartusha/Ecommerce_Sales_Data_Analysis_Project" target="__blank"><strong style="color: rgb(49, 115, 187);"><i class = "fas fa-external-link-alt"><i></strong></a>`,
      duration: "",
      desc: `
        ▪ Developed a  model using <strong>Support Vector Machine (SVM)</strong> to predict Parkinson's disease, achieving <strong>89% accuracy</strong>.<br/>
▪ <strong>Preprocessed</strong> data by scaling features with <strong>StandardScaler</strong> and optimizing model performance through <strong>train-test split</strong>.</br>
▪ Utilized <strong>SVC model</strong> to enhance prediction accuracy, <strong>leveraging</strong> key clinical features for effective <strong>disease diagnosis.</strong>`,
    },

    {
      // https://github.com/kumartusha/HTML_CSS_JS_PROJECTS
      title: `FakeFinder: AI-Driven News Verifier <a href="https://github.com/kumartusha/Credit_Card_Financial_Dashboard" target="__blank"><strong style="color: rgb(49, 115, 187);"><i class = "fas fa-external-link-alt"><i></strong></a>`,
      duration: "",
      link: "",
      desc: `
           ▪ Implemented a model using <strong>Logistic Regression</strong> with <strong>TF-IDF Vectorization</strong> for effective feature extraction.<br/>
▪ Utilized <strong>NLTK</strong> for <strong>stopword removal</strong> and <strong>stemming</strong> to preprocess and clean textual data.<br/>
▪ Achieved a <strong>97.91%</strong> accuracy by optimizing model performance through <strong>train-test splitting</strong> and rigorous evaluation.
          `,
    },
    {
      title: `Brain Stroke Prediction Model <a href="https://github.com/kumartusha/Ecommerce_Website" target="__blank"><strong style="color: rgb(49, 115, 187);"><i class = "fas fa-external-link-alt"><i></strong></a>`,
      duration: "",
      link: "",
      desc: `▪ Achieved <strong>95.5%</strong> accuracy in predicting stroke risks using <strong>XGBClassifier</strong>, <strong>LightGBM</strong>, and <strong>RandomForest</strong> models.<br>
▪ Improved detection by tackling class imbalance with <strong>SMOTE</strong>, boosting both precision and recall.<br>
▪ Tested various models like <strong>Logistic Regression</strong> and <strong>VC Models</strong> to ensure balanced and reliable predictions.`,
    },
  ],
  experiences: [
    // {
    //   organization: `Cognifyz Technologies`,
    //   title: `Machine Learning Intern`,
    //   date: "",
    //   details: [
    //     // `Undergoing a 3-month training as a <strong>Data Science Trainee</strong>, specializing in <strong>Machine Learning</strong> using <strong>Python</strong>, <strong>Scikit-learn</strong>, <strong>TensorFlow</strong>, and <strong>Keras</strong>. Hands-on experience with <strong>NLP</strong> techniques (Text Processing, Sentiment Analysis) and proficient in <strong>SQL</strong> for data manipulation, preprocessing, and model deployment.`,
    //     `Undergoing a 3-month training as a <strong>Data Science Trainee</strong>, specializing in <strong>Machine Learning</strong> with <strong>Python</strong>, <strong>Scikit-learn</strong>, <strong>TensorFlow</strong>, and <strong>Keras</strong>. Skilled in <strong>NLP</strong> (Text Processing, Sentiment Analysis) and proficient in <strong>SQL</strong> for data manipulation.`,
    //   ],
    // },
    {
      organization: `Anudip Foundation`,
      title: `Data Science Trainee `,
      date: "",
      details: [
        // `Undergoing a 3-month training as a <strong>Data Science Trainee</strong>, specializing in <strong>Machine Learning</strong> using <strong>Python</strong>, <strong>Scikit-learn</strong>, <strong>TensorFlow</strong>, and <strong>Keras</strong>. Hands-on experience with <strong>NLP</strong> techniques (Text Processing, Sentiment Analysis) and proficient in <strong>SQL</strong> for data manipulation, preprocessing, and model deployment.`,
        `Undergoing a 3-month training as a <strong>Data Science Trainee</strong>, specializing in <strong>Machine Learning</strong> with <strong>Python</strong>, <strong>Scikit-learn</strong>, <strong>TensorFlow</strong>, and <strong>Keras</strong>. Skilled in <strong>NLP</strong> (Text Processing, Sentiment Analysis) and proficient in <strong>SQL</strong> for data manipulation.`,
      ],
    },
  ],
  events: [],
};
