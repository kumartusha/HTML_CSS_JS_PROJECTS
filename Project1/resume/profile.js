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
      <strong>Git</strong> and <strong>Github</strong> For Beginners by <strong>IBM</strong>.
      <a href="https://skills.yourlearning.ibm.com/certificate/share/ff2a17f859ewogICJsZWFybmVyQ05VTSIgOiAiMTcxNjU2OVJFRyIsCiAgIm9iamVjdFR5cGUiIDogIkFDVElWSVRZIiwKICAib2JqZWN0SWQiIDogIlVSTC1SR09KNVlIN0VWSyIKfQ36f68afcbd-10" target="__blank"><strong style="color: rgb(49, 115, 187);"><i class = "fas fa-external-link-alt"><i></strong></a>`,
      date: "",
    },
    {
      desc: `<strong>C++</strong> Fundamentals by Coding Ninjas.
      <a href="https://files.codingninjas.in/certificate-429707-32d575596e2303b8b5cb77741c42aa81.pdf" target="__blank"><strong style="color: rgb(49, 115, 187);"><i class = "fas fa-external-link-alt"><i></strong></a>`,
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
      category: "Languages & Libraries",
      topics: [
        "HTML5",
        "CSS3",
        "SQL",
        "NumPy",
        "Pandas",
        "MatplotLib",
        "Seaborn",
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
        "Figma",
        "Vercel",
        "PowerBI",
        "Microsoft Excel",
        "Jupyter Notebook",
      ],
    },
    {
      category: "Course Work",
      topics: [
        "Data Structures and Algorithms",
        "Object Oriented Programming",
        "Operating System",
        "Data Analysis & Visualization",
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
      title: `H.R. Analytics Dashboard <a href="https://github.com/kumartusha/HR_Analytics_DashBoard" target="__blank"><strong style="color: rgb(49, 115, 187);"><i class = "fas fa-external-link-alt"><i></strong></a>`,
      duration: "",
      // link: "https://github.com/kumartusha/Netflix-Clone",
      // desc: `
      // ▪ Developed a Netflix clone website using <strong>ReactJS</strong>, <strong>TMDB API</strong>, and <strong>Firebase</strong>, featuring dynamic movie details.<br>
      // ▪ <strong>ReactJS</strong> to create a Netflix-like user interface, Integrated <strong>TMDB API</strong> for dynamic content display, Developed user authentication using <strong>Firebase</strong>.
      // `,
      desc: `Developed an <strong>HR Analytics</strong> Dashboard in <strong>Power BI</strong> to track employee count, attrition rate, and tenure.<br>

             Created <strong>visualizations</strong> for attrition by age, gender, education, salary, and job role.<br>

             Utilized calculated <strong>fields</strong> and <strong>measures</strong> for actionable <strong>HR insights</strong> on retention.`
    },

    {
      title: `Ecommerce Website <a href="https://github.com/kumartusha/Ecommerce_Website" target="__blank"><strong style="color: rgb(49, 115, 187);"><i class = "fas fa-external-link-alt"><i></strong></a>`,
      duration: "",
      link: "",
      desc:
        // `
        // A ecommerce website utilizes <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>Vanilla JavaScript</strong> to provide a seamless shopping experience. Leveraging <strong>JSON data</strong> for product details, users can easily browse and purchase items. With interactive features powered by JavaScript, such as increasing quantity, customers can customize their shopping experience to suit their needs.Web-Application standards including <strong>Full-responsiveness</strong>  <a href="https://ecommerce-modern-website.netlify.app/" target="__blank"><strong style="color: rgb(0, 145, 255);">(Demo)</strong></a>
        // `,
        `▪ This E-commerce website clone, built with <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>Vanilla JavaScript</strong>.<br>▪ Features having like <strong>adding</strong> and <strong>removing</strong> items from cart and leverage <strong>JSON</strong> data for product details.<br> <strong>▪ Local storage</strong> for real-time data saving, all while ensuring <strong>Full responsiveness</strong>.`,
    },
    {
      // https://github.com/kumartusha/HTML_CSS_JS_PROJECTS
      title: `Credit Card Financial Dashboard (Power BI) <a href="https://github.com/kumartusha/Credit_Card_Financial_Dashboard" target="__blank"><strong style="color: rgb(49, 115, 187);"><i class = "fas fa-external-link-alt"><i></strong></a>`,
      duration: "",
      link: "",
      desc: `
           ▪ Created an <strong>interactive dashboard</strong> using <strong>SQL database</strong> to analyze <strong>transaction and customer data</strong>, delivering <strong>real-time insights</strong> for stakeholder decision-making.
    <br>
           ▪ Optimized <strong>data processing</strong> and <strong>analysis workflows</strong> for monitoring <strong>key metrics</strong> and <strong>trends</strong>.<br>
           ▪ Provided <strong>actionable insights</strong> to <strong>stakeholders</strong>, enhancing <strong>data-driven decision-making</strong>.
          `,
    },
    {
      title: `Ecommerce Sales Data Analysis Project <a href="https://github.com/kumartusha/Ecommerce_Sales_Data_Analysis_Project" target="__blank"><strong style="color: rgb(49, 115, 187);"><i class = "fas fa-external-link-alt"><i></strong></a>`,
      duration: "",
      // link: "https://github.com/kumartusha/gemini-clone",
      // desc: `
      // Developed a dynamic <strong>Study Buddy Project</strong> using <strong>Core Java</strong>, <strong>Java Swing</strong>, and <strong>SQL</strong>, featuring dual user and admin functionalities. Users seamlessly access and download educational materials uploaded by <strong>Admin</strong>, ensuring a streamlined learning experience. Proficiently managed database integration for robust <strong>data storage</strong> and <strong>retrieval</strong>. This project showcases expertise in <strong>Java programming</strong>, <strong>UI design</strong>, and <strong>database management</strong>, underscoring adept problem-solving and technical proficiency
      // `,
      //  desc:
      //  `▪ Developed a Generative AI app using Google <strong>Gemini API</strong> and <strong>ReactJS</strong>. <br>
      //   ▪ <strong>Features:-</strong> AI-driven content generation with Google Gemini API and build <strong>Responsive</strong> & User-friendly interface designed with <strong>ReactJS</strong>.
      //   <a href="https://gemini-clone-one-ashy.vercel.app/" target="__blank"><strong style="color: rgb(0, 145, 255);">(Demo)</strong></a>`
      //  ,

      desc: `
        ▪ Optimized <strong>SQL queries</strong> for cumulative sales and customer retention metrics directly in <strong>Jupyter Notebook</strong>.<br>

        ▪ Connected <strong>Python</strong> with <strong>MySQL</strong> using <strong>MySQL Connector</strong> for efficient data extraction and analysis.<br>

        ▪ <strong>Visualized data trends</strong> and revenue distributions using <strong>Pandas</strong>, <strong>NumPy</strong>, <strong>Seaborn</strong>, and <strong>Matplotlib</strong>.
        `,
    },
    
  ],
  experiences: [
    {
      organization: `Anudip Foundation`,
      title: `Data Analytics Trainee `,
      date: "",
      details: [
        `Currently undergoing a <strong> 3-month </strong> Data Analytics training program, mastering tools for <strong> Data Analysis </strong> and <strong>Visualization </strong>. Proficient in <strong>Microsoft Excel</strong> for advanced data manipulation and <strong>Power BI</strong> for interactive dashboards. Skilled in <strong>Python</strong> with <strong>NumPy</strong>, <strong>SQL</strong> and <strong>Pandas</strong> for efficient data handling and analysis.

`,
      ],
    },
  ],
  events: [],
};
