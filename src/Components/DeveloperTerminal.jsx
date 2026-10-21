import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal, faTimes, faRobot, faSpinner, faTrash } from "@fortawesome/free-solid-svg-icons";
import { getGroqChatResponse } from "../services/groqApi";
import "./assets/css/DeveloperTerminal.css";

const initialLogs = [
  "Abdul Qadeer Portfolio AI Console v3.0 [Powered by Groq llama-3.3-70b]",
  "Type your question or click quick command pills below.",
  "-------------------------------------------------------------------",
];

const DeveloperTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState(initialLogs);
  const [apiMessages, setApiMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isTypingStream, setIsTypingStream] = useState(false);
  const logsEndRef = useRef(null);

  const scrollToBottom = () => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [logs, isOpen, isLoading, isTypingStream]);

  // Typewriter effect to render characters one by one in real-time
  const typeOutMessage = (fullText) => {
    return new Promise((resolve) => {
      setIsTypingStream(true);
      setLogs((prev) => [...prev, ""]);
      let idx = 0;

      const timer = setInterval(() => {
        idx++;
        const currentChunk = fullText.slice(0, idx);
        setLogs((prevLogs) => {
          const updated = [...prevLogs];
          updated[updated.length - 1] = currentChunk;
          return updated;
        });

        if (idx >= fullText.length) {
          clearInterval(timer);
          setIsTypingStream(false);
          resolve();
        }
      }, 15); // 15ms per character for ultra-smooth real-time typewriter effect
    });
  };

  const getFallbackReply = (query) => {
    const q = query.toLowerCase();
    if (q.includes("skill") || q.includes("tech") || q.includes("stack")) {
      return "Abdul Qadeer is a Full Stack Web & Mobile Developer and DevOps Engineer. His stack includes React, Next.js, Python (Django & Flask), Supabase, PostgreSQL, MySQL, REST & GraphQL APIs, Docker, Kubernetes, CI/CD, and Microsoft Azure.";
    } else if (q.includes("backend") || q.includes("cloud") || q.includes("devops")) {
      return "Backend & Cloud Stack: Python (Django & Flask), Node.js, Express, NestJS, Docker, Kubernetes, CI/CD, Microsoft Azure, Supabase, PostgreSQL, and MySQL.";
    } else if (q.includes("certif")) {
      return "Certifications: Java Programming Masterclass (Oracle Academy), C++ Data Structures & Algorithms (Coding Ninjas), NumPy & Data Science Python (Coursera), and AI & Software Tech Symposium (2024).";
    } else if (q.includes("edu") || q.includes("degree") || q.includes("cgpa") || q.includes("uni")) {
      return "Degree: Bachelor of Science in Computer Science (BSCS) from Shah Abdul Latif University (2022-2026) with an honor CGPA of 3.80 / 4.0.";
    } else if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("whatsapp") || q.includes("call")) {
      return "Email: qadeersaleman@gmail.com | Phone / WhatsApp: +92 302 3466105 | Location: Ghotki, Sindh, Pakistan (Open for Remote & Relocation).";
    } else if (q.includes("project") || q.includes("app") || q.includes("work")) {
      return "Abdul Qadeer has built 50+ real-world applications including Azure K8s CI/CD deployments, Next.js & Supabase SaaS platforms, Python Django CRMs, Flask microservices, and React Native mobile apps.";
    } else if (q.includes("cv") || q.includes("resume") || q.includes("download")) {
      window.open(`${process.env.PUBLIC_URL}/Qadeer-Resume.pdf`, "_blank");
      return "Initiating download for Abdul_Qadeer_Resume.pdf...";
    } else if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
      return "Hello! Feel free to ask about Abdul Qadeer's full stack & DevOps skills, 50+ projects, BSCS honors degree (3.80 CGPA), or contact info.";
    }
    return "Abdul Qadeer is a Full Stack Web & Mobile Developer and DevOps Engineer with 3+ years experience and 50+ deployed systems. Ask about his skills, projects, education, or contact details!";
  };

  const processQuery = async (queryStr) => {
    const cleanCmd = queryStr.trim();
    if (!cleanCmd || isLoading || isTypingStream) return;

    if (cleanCmd.toLowerCase() === "clear") {
      setLogs([]);
      setApiMessages([]);
      return;
    }

    // Add user query line immediately
    setLogs((prev) => [...prev, `> ${cleanCmd}`]);
    setInputVal("");

    if (cleanCmd.toLowerCase() === "help") {
      setLogs((prev) => [
        ...prev,
        "Available Commands & Topics:",
        "  summary     - Recruiter overview",
        "  skills      - Full tech stack",
        "  education   - BSCS degree & CGPA",
        "  projects    - 50+ mobile & web apps",
        "  contact     - Phone, email & location",
        "  cv          - Download Resume PDF",
        "  clear       - Clear CLI terminal screen",
        "  Or type any custom question directly!"
      ]);
      return;
    }

    if (cleanCmd.toLowerCase() === "cv" || cleanCmd.toLowerCase() === "download-cv") {
      window.open(`${process.env.PUBLIC_URL}/Qadeer-Resume.pdf`, "_blank");
      await typeOutMessage("Initiating download for Abdul_Qadeer_Resume.pdf...");
      return;
    }

    const newApiMessages = [...apiMessages, { role: "user", content: cleanCmd }];
    setApiMessages(newApiMessages);
    setIsLoading(true);

    try {
      const aiReply = await getGroqChatResponse(newApiMessages);
      setIsLoading(false);
      setApiMessages((prev) => [...prev, { role: "assistant", content: aiReply }]);
      await typeOutMessage(aiReply);
    } catch (err) {
      setIsLoading(false);
      const fallbackText = getFallbackReply(cleanCmd);
      setApiMessages((prev) => [...prev, { role: "assistant", content: fallbackText }]);
      await typeOutMessage(fallbackText);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim() || isLoading || isTypingStream) return;
    processQuery(inputVal);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        className="terminal-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        title="Open Portfolio AI CLI"
        data-cursor="AI CLI"
      >
        <FontAwesomeIcon icon={faRobot} className="me-2 text-info" />
        <span className="btn-label d-none d-md-inline ms-1">Portfolio AI CLI</span>
      </button>

      {/* Terminal Modal Window */}
      {isOpen && (
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot red" onClick={() => setIsOpen(false)}></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-title d-flex align-items-center gap-2">
              <FontAwesomeIcon icon={faTerminal} className="text-info" />
              <span>bash - abdulqadeer@portfolio-ai:~ (llama-3.3-70b)</span>
            </div>
            <button className="terminal-close-btn" onClick={() => setIsOpen(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <div className="terminal-body">
            {logs.map((log, index) => (
              <div
                key={index}
                className={`log-line ${log.startsWith(">") ? "user-cmd" : "ai-cmd"}`}
              >
                {log}
              </div>
            ))}
            {isLoading && (
              <div className="log-line ai-cmd loading-pulse">
                <FontAwesomeIcon icon={faSpinner} spin className="me-2 text-info" />
                <span>Thinking...</span>
              </div>
            )}
            <div ref={logsEndRef} />
          </div>

          {/* Quick Command Pills */}
          <div className="terminal-pills">
            <button disabled={isLoading || isTypingStream} onClick={() => processQuery("Give me a brief recruiter summary of Abdul Qadeer")}>summary</button>
            <button disabled={isLoading || isTypingStream} onClick={() => processQuery("What are Abdul Qadeer's technical skills & stack?")}>skills</button>
            <button disabled={isLoading || isTypingStream} onClick={() => processQuery("Tell me about Abdul Qadeer's education and CGPA")}>education</button>
            <button disabled={isLoading || isTypingStream} onClick={() => processQuery("What projects has Abdul Qadeer completed?")}>projects</button>
            <button disabled={isLoading || isTypingStream} onClick={() => processQuery("How can I contact Abdul Qadeer?")}>contact</button>
            <button disabled={isLoading || isTypingStream} onClick={() => processQuery("cv")}>download-cv</button>
            <button disabled={isLoading || isTypingStream} onClick={() => processQuery("clear")}>
              <FontAwesomeIcon icon={faTrash} className="me-1" /> clear
            </button>
          </div>

          <form onSubmit={handleSubmit} className="terminal-input-form">
            <span className="prompt-symbol">abdulqadeer@ai:~$</span>
            <input
              type="text"
              className="terminal-input"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask anything about Abdul Qadeer's portfolio..."
              disabled={isLoading || isTypingStream}
              autoFocus
            />
          </form>
        </div>
      )}
    </>
  );
};

export default DeveloperTerminal;
