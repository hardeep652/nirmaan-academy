"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV = ["Home","Courses","About","Results","Contact"];

const STATS = [
  { value: "1200+", label: "Students Enrolled" },
  { value: "98%",   label: "DDCET Success Rate" },
  { value: "12+",   label: "Years of Excellence" },
  { value: "40+",   label: "Top Rankers Produced" },
];

const COURSES = [
  {
    tag: "Flagship", icon: "🎯", title: "DDCET Preparation",
    desc: "Intensive, rank-focused coaching for the Diploma to Degree Common Entrance Test. Covers all subjects with weekly mock tests, personal doubt sessions, and strategy workshops.",
    features: ["Full Syllabus Coverage","Weekly Mock Tests","Rank Prediction Analysis","Personal Doubt Sessions"],
    accent: "#F97316", bg: "rgba(249,115,22,0.06)",
  },
  {
    tag: "Degree", icon: "🎓", title: "Degree Classes",
    desc: "Subject-wise coaching for engineering and science degree students. Concept-first teaching methodology with regular assessments and exam-ready preparation.",
    features: ["Semester-wise Modules","Regular Assessments","Formula Sheets & Notes","Exam Strategy Sessions"],
    accent: "#0284C7", bg: "rgba(2,132,199,0.06)",
  },
  {
    tag: "Diploma", icon: "📐", title: "Diploma Classes",
    desc: "Strong conceptual foundation for diploma students across all core technical subjects. Emphasis on practical understanding and consistent performance.",
    features: ["Core Subject Coaching","Practical Problem Solving","Study Material Provided","Progress Tracking"],
    accent: "#0284C7", bg: "rgba(2,132,199,0.06)",
  },
];

const WHY = [
  { icon:"🏆", title:"Proven Track Record", desc:"Over 40 top rankers in DDCET across 12 years. Our results speak louder than any claim." },
  { icon:"👨‍🏫", title:"Expert Faculty", desc:"Experienced educators who understand exactly what Gujarat's technical entrance exams demand." },
  { icon:"📊", title:"Data-Driven Prep", desc:"Mock tests, rank prediction, and performance analytics to keep every student on track." },
  { icon:"📚", title:"Comprehensive Material", desc:"Curated notes, formula sheets, and practice sets — no need to look elsewhere." },
  { icon:"🔄", title:"Regular Revisions", desc:"Structured revision cycles built into the curriculum so nothing slips through the cracks." },
  { icon:"🤝", title:"Personal Attention", desc:"Small batch sizes ensuring every student gets the focus and support they need." },
];

const RESULTS = [
  { name:"Raj Patel",    rank:"Rank 3",  exam:"DDCET 2023", batch:"DDCET Batch" },
  { name:"Priya Shah",   rank:"Rank 7",  exam:"DDCET 2023", batch:"DDCET Batch" },
  { name:"Mihir Desai",  rank:"Rank 12", exam:"DDCET 2022", batch:"DDCET Batch" },
  { name:"Aneri Joshi",  rank:"Rank 5",  exam:"DDCET 2022", batch:"DDCET Batch" },
  { name:"Dev Solanki",  rank:"Rank 9",  exam:"DDCET 2021", batch:"DDCET Batch" },
  { name:"Krutika Mehta",rank:"Rank 2",  exam:"DDCET 2021", batch:"DDCET Batch" },
];

const TESTIMONIALS = [
  { name:"Raj Patel",    role:"DDCET Rank 3 · 2023", text:"Nirmaan Academy gave me the structure and discipline I needed. The mock tests were spot-on with the actual paper. Couldn't have cracked Rank 3 without this team." },
  { name:"Priya Shah",   role:"DDCET Rank 7 · 2023", text:"The faculty here genuinely cares about each student. Personal doubt sessions made all the difference for me. Best decision I made for my DDCET prep." },
  { name:"Mihir Desai", role:"Degree Student · GTU",  text:"I struggled badly with Maths and Physics in my first semester. Nirmaan's degree coaching completely turned it around. Cleared with distinction." },
];

const FAQS = [
  { q:"When do batches start for DDCET?",    a:"DDCET batches typically start in January and June each year. Early enrolment is recommended as batch sizes are kept small for quality." },
  { q:"Is study material provided?",          a:"Yes. All students receive curated notes, formula sheets, and practice question banks. No external material is required." },
  { q:"Do you offer online classes?",        a:"Currently we focus on in-person coaching for maximum effectiveness. Recorded lectures are shared with enrolled students for revision." },
  { q:"What is the batch size?",             a:"We keep batches small — typically 20–30 students — to ensure personal attention and focused teaching." },
  { q:"Are there any demo classes?",          a:"Yes, free demo classes are available. Contact us to schedule a visit and experience the teaching style first-hand." },
];

// Reusable animation variants for clean code structures
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

export default function NirmaanAcademy() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [openFaq,   setOpenFaq]   = useState(null);
  const [form,      setForm]      = useState({ name:"", phone:"", course:"", msg:"" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const goto = (id) => {
    setMenuOpen(false);
    if (id === "Home") { window.scrollTo({ top:0, behavior:"smooth" }); return; }
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior:"smooth" });
  };

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name:"", phone:"", course:"", msg:"" });
  };

  const N = "#0A1628";
  const O = "#F97316";
  const B = "#0284C7";
  const W = "#F4F8FA"; 
  const S = "#475569";

  return (
    <div style={{ fontFamily:"'Inter',sans-serif", background:W, color:N, overflowX:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}

        .nl{color:#475569;text-decoration:none;font-size:.875rem;font-weight:500;letter-spacing:.02em;padding:6px 0;position:relative;transition:color .2s;white-space:nowrap;}
        .nl::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background:#F97316;transition:width .25s;}
        .nl:hover,.nl.act{color:#0A1628;}
        .nl:hover::after,.nl.act::after{width:100%;}

        .bo{background:#F97316;color:#fff;border:none;padding:13px 30px;border-radius:7px;font-family:'Sora',sans-serif;font-weight:700;font-size:.88rem;cursor:pointer;letter-spacing:.02em;transition:all .2s;box-shadow:0 4px 18px rgba(249,115,22,.25);}
        .bo:hover{background:#ea6a0a;box-shadow:0 8px 28px rgba(249,115,22,.35);}
        
        .bg{background:transparent;color:#0A1628;border:1.5px solid rgba(10,22,40,.2);padding:13px 30px;border-radius:7px;font-family:'Sora',sans-serif;font-weight:600;font-size:.88rem;cursor:pointer;transition:all .2s;}
        .bg:hover{border-color:#0A1628;background:rgba(10,22,40,.04);}

        .cc{background:#fff;border-radius:18px;padding:34px 28px;border:1.5px solid #E2E8F0;transition:border-color .22s, box-shadow .22s;position:relative;overflow:hidden;}
        .wc{background:#fff;border:1px solid #E2E8F0;border-radius:14px;padding:28px 24px;transition:all .2s;}
        .rc{background:#fff;border-radius:14px;padding:24px;border:1.5px solid #E2E8F0;text-align:center;transition:all .2s;}
        .tc{background:#fff;border-radius:16px;padding:32px 28px;border:1.5px solid #E2E8F0;box-shadow:0 4px 24px rgba(10,22,40,.04);flex:1;min-width:260px;transition:all .2s;}

        .fi{width:100%;padding:13px 16px;border-radius:8px;border:1.5px solid #CBD5E1;font-family:'Inter',sans-serif;font-size:.9rem;color:#0A1628;background:#fff;transition:border-color .2s,box-shadow .2s;outline:none;}
        .fi:focus{border-color:#0284C7;box-shadow:0 0 0 3px rgba(2,132,199,.15);}
        .fi::placeholder{color:#94A3B8;}

        .fqi{border-bottom:1px solid #E2E8F0;}
        .fqq{display:flex;align-items:center;justify-content:space-between;padding:20px 0;cursor:pointer;font-family:'Sora',sans-serif;font-weight:600;font-size:.95rem;color:#0A1628;gap:16px;}
        .fqq:hover{color:#F97316;}

        .ey{font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#F97316;margin-bottom:10px;font-family:'Sora',sans-serif;}
        .db{width:44px;height:3px;background:linear-gradient(90deg,#F97316,#0284C7);border-radius:2px;margin:14px 0 22px;}
        .sl{display:inline-flex;align-items:center;gap:7px;background:rgba(249,115,22,.08);border:1px solid rgba(249,115,22,.2);border-radius:100px;padding:5px 14px;font-size:.72rem;font-weight:700;color:#F97316;letter-spacing:.07em;text-transform:uppercase;margin-bottom:18px;}
        .tp{display:inline-block;padding:3px 12px;border-radius:100px;font-size:.7rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;}

        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity:.4; }
          70% { transform: scale(1.06);opacity:0;  }
          100%{ transform: scale(1);   opacity:0;  }
        }
        .pulse-ring{position:absolute;inset:-6px;border-radius:50%;border:2px solid #F97316;animation:pulse-ring 2.5s ease-out infinite;}
        .pulse-ring2{position:absolute;inset:-14px;border-radius:50%;border:1.5px solid rgba(249,115,22,.3);animation:pulse-ring 2.5s ease-out infinite .8s;}

        @keyframes float {
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-10px);}
        }
        .float{animation:float 4s ease-in-out infinite;}

        ::-webkit-scrollbar{width:5px;}
        ::-webkit-scrollbar-track{background:#F4F8FA;}
        ::-webkit-scrollbar-thumb{background:#F97316;border-radius:3px;}

        @media(max-width:900px){
          .desk-nav{display:none!important;}
          .mob-ham{display:flex!important;}
          .hero-row{flex-direction:column!important;align-items:flex-start!important;}
          .hero-photo{display:none!important;}
          .hero-h1{font-size:2.4rem!important;}
          .courses-grid{flex-direction:column!important;}
          .why-grid{grid-template-columns:1fr 1fr!important;}
          .res-grid{grid-template-columns:1fr 1fr!important;}
          .testi-row{flex-direction:column!important;}
          .abt-row{flex-direction:column!important;}
          .contact-row{flex-direction:column!important;}
          .stats-row{flex-wrap:wrap!important;}
          .stat-c{min-width:calc(50% - 8px)!important;}
          .hero-btns{flex-wrap:wrap!important;}
        }
        @media(max-width:520px){
          .why-grid{grid-template-columns:1fr!important;}
          .res-grid{grid-template-columns:1fr!important;}
        }
      `}</style>

      {/* ══════════ NAVBAR ══════════ */}
      <header style={{
        position:"fixed",top:0,left:0,right:0,zIndex:200,
        padding:scrolled?"13px 0":"20px 0",
        background:scrolled?"rgba(244, 248, 250, 0.96)":"transparent",
        backdropFilter:scrolled?"blur(14px)":"none",
        borderBottom:scrolled?"1px solid rgba(10,22,40,.06)":"none",
        transition:"all .3s",
      }}>
        <div style={{maxWidth:1160,margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"center",gap:10,cursor:"pointer"} } onClick={()=>goto("Home")}>
            <div style={{width:38,height:38,background:"linear-gradient(135deg,#F97316,#ea580c)",borderRadius:9,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Sora',sans-serif",fontWeight:800,color:"#fff",fontSize:"1.1rem",boxShadow:"0 4px 14px rgba(249,115,22,.3)"}}>N</div>
            <div>
              <div style={{fontFamily:"'Sora',sans-serif",fontWeight:800,color:N,fontSize:"1.05rem",lineHeight:1.1}}>Nirmaan</div>
              <div style={{fontSize:".6rem",color:S,letterSpacing:".1em",textTransform:"uppercase",fontWeight:600}}>Academy</div>
            </div>
          </div>

          <nav className="desk-nav" style={{display:"flex",alignItems:"center",gap:34}}>
            {NAV.map(n=>(
              <a key={n} className={`nl${activeNav===n?" act":""}`} href="#"
                onClick={e=>{e.preventDefault();setActiveNav(n);goto(n);}}>
                {n}
              </a>
            ))}
          </nav>

          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="bo" style={{padding:"9px 22px",fontSize:".82rem"}} onClick={()=>goto("Contact")}>Enrol Now</motion.button>
            <button className="mob-ham" onClick={()=>setMenuOpen(!menuOpen)}
              style={{display:"none",flexDirection:"column",gap:5,background:"none",border:"none",cursor:"pointer",padding:4}}>
              {[0,1,2].map(i=>(
                <span key={i} style={{
                  display:"block",width:23,height:2,background:N,borderRadius:2,transition:"all .2s",
                  transform:menuOpen&&i===0?"rotate(45deg) translate(5px,5px)":menuOpen&&i===2?"rotate(-45deg) translate(5px,-5px)":"none",
                  opacity:menuOpen&&i===1?0:1,
                }}/>
              ))}
            </button>
          </div>
        </div>
        {menuOpen&&(
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={{background:"rgba(244, 248, 250, 0.98)",padding:"14px 24px 24px",borderTop:"1px solid rgba(10,22,40,.06)",display:"flex",flexDirection:"column",gap:18}}>
            {NAV.map(n=>(
              <a key={n} className="nl" style={{fontSize:"1rem"}} href="#"
                onClick={e=>{e.preventDefault();setActiveNav(n);goto(n);}}>
                {n}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      {/* ══════════ HERO ══════════ */}
      <section id="home" style={{
        background:"linear-gradient(155deg, #F0F4F8 0%, #E0EBF5 50%, #D4E4F0 100%)",
        minHeight:"100vh",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",paddingTop:80,
      }}>
        <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(10,22,40,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(10,22,40,.02) 1px,transparent 1px)",backgroundSize:"56px 56px",pointerEvents:"none"}}/>
        <div style={{position:"absolute",width:600,height:600,background:"radial-gradient(circle,rgba(249,115,22,.06) 0%,transparent 65%)",top:"-10%",right:"5%",borderRadius:"50%",pointerEvents:"none"}}/>
        <div style={{position:"absolute",width:400,height:400,background:"radial-gradient(circle,rgba(2,132,199,.06) 0%,transparent 65%)",bottom:"5%",left:"-5%",borderRadius:"50%",pointerEvents:"none"}}/>

        <div style={{maxWidth:1160,margin:"0 auto",padding:"90px 24px 110px",position:"relative",zIndex:2,width:"100%"}}>
          <div className="hero-row" style={{display:"flex",alignItems:"center",gap:48,justifyContent:"space-between"}}>

            {/* LEFT — text */}
            <motion.div initial="hidden" animate="visible" variants={fadeIn} style={{flex:1,minWidth:0}}>
              <div className="sl">
                <span style={{width:7,height:7,borderRadius:"50%",background:"#F97316",display:"inline-block"}}/>
                Gujarat's Premier Technical Coaching
              </div>
              <h1 className="hero-h1" style={{
                fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:"3.7rem",
                lineHeight:1.08,color:N,marginBottom:22,letterSpacing:"-.025em",
              }}>
                Build Your Future<br/>
                <span style={{background:"linear-gradient(90deg,#F97316,#ea580c)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                  With Nirmaan.
                </span>
              </h1>
              <p style={{fontSize:"1.05rem",color:S,lineHeight:1.8,marginBottom:40,maxWidth:500}}>
                Expert coaching for <strong style={{color:N}}>DDCET</strong>, Degree &amp; Diploma students.
                Structured curriculum, seasoned faculty, and a 12-year track record of top ranks across Gujarat.
              </p>
              <div className="hero-btns" style={{display:"flex",gap:14,marginBottom:48}}>
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="bo" style={{fontSize:".95rem",padding:"14px 34px"}} onClick={()=>goto("Courses")}>Explore Courses →</motion.button>
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="bg" style={{fontSize:".95rem",padding:"14px 34px"}} onClick={()=>goto("Results")}>View Results</motion.button>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:14,flexWrap:"wrap"}}>
                <div style={{display:"flex"}}>
                  {["S","R","P","A","M"].map((l,i)=>(
                    <div key={i} style={{
                      width:34,height:34,borderRadius:"50%",
                      background:`linear-gradient(135deg,${["#F97316","#0284C7","#F97316","#0284C7","#F97316"][i]},${["#ea580c","#0369a1","#ea580c","#0369a1","#ea580c"][i]})`,
                      border:"2.5px solid #E0EBF5",marginLeft:i===0?0:-9,
                      display:"flex",alignItems:"center",justifyContent:"center",
                      fontSize:".7rem",color:"#fff",fontWeight:700,
                    }}>{l}</div>
                  ))}
                </div>
                <span style={{color:S,fontSize:".85rem"}}>
                  Trusted by <strong style={{color:N}}>1,200+ students</strong> across Gujarat
                </span>
              </div>
            </motion.div>

            {/* RIGHT — Photo frame */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="hero-photo float" style={{flexShrink:0,position:"relative",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <div style={{
                position:"absolute",width:340,height:340,borderRadius:"50%",
                background:"radial-gradient(circle,rgba(249,115,22,.12) 0%,rgba(2,132,199,.08) 60%,transparent 100%)",
                top:"50%",left:"50%",transform:"translate(-50%,-50%)",
                pointerEvents:"none",
              }}/>

              <div style={{position:"absolute",inset:-20,borderRadius:"50%",border:"1px dashed rgba(249,115,22,.2)",pointerEvents:"none"}}/>
              <div style={{position:"absolute",inset:-40,borderRadius:"50%",border:"1px dashed rgba(2,132,199,.15)",pointerEvents:"none"}}/>

              <div style={{position:"relative",width:280,height:280}}>
                <div className="pulse-ring"/>
                <div className="pulse-ring2"/>

                <div style={{
                  width:280,height:280,borderRadius:"50%",
                  background:"#fff",
                  border:"4px solid transparent",
                  backgroundClip:"padding-box",
                  boxShadow:"0 24px 60px rgba(10,22,40,.08), 0 0 80px rgba(2,132,199,.1)",
                  overflow:"hidden",
                  position:"relative",
                  display:"flex",alignItems:"center",justifyContent:"center",
                }}>
                  <img
                    src="/sir-photo.jpg"
                    alt="Faculty"
                    style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top"}}
                    onError={e=>{e.currentTarget.style.display="none";}}
                  />
                  <div style={{
                    position:"absolute",inset:0,display:"flex",flexDirection:"column",
                    alignItems:"center",justifyContent:"center",
                    background:"linear-gradient(145deg, #EBF3F9, #D9E8F3)",
                    color:"rgba(10,22,40,.2)",fontSize:"5rem",
                    fontFamily:"'Sora',sans-serif",
                  }}>
                    👨‍🏫
                    <span style={{fontSize:".75rem",marginTop:12,color:S,fontFamily:"'Inter',sans-serif",letterSpacing:".05em"}}>Add photo here</span>
                  </div>
                </div>
              </div>

              <div style={{
                position:"absolute",bottom:10,right:-10,
                background:"linear-gradient(135deg,#F97316,#ea580c)",
                borderRadius:12,padding:"10px 16px",
                boxShadow:"0 6px 24px rgba(249,115,22,.25)",
                border:"2px solid #fff",
              }}>
                <div style={{fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:"1.2rem",color:"#fff",lineHeight:1}}>12+</div>
                <div style={{fontSize:".65rem",color:"rgba(255,255,255,.95)",fontWeight:600,letterSpacing:".05em",marginTop:2}}>YRS EXP</div>
              </div>

              <div style={{
                position:"absolute",top:10,left:-16,
                background:"#fff",
                border:"1.5px solid rgba(2,132,199,.3)",
                borderRadius:12,padding:"10px 14px",
                boxShadow:"0 6px 20px rgba(10,22,40,.05)",
              }}>
                <div style={{fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:"1.0rem",color:"#0284C7",lineHeight:1}}>40+</div>
                <div style={{fontSize:".62rem",color:S,fontWeight:600,letterSpacing:".05em",marginTop:2}}>TOP RANKS</div>
              </div>
            </motion.div>

          </div>
        </div>
        <div style={{position:"absolute",bottom:0,left:0,right:0,height:90,background:`linear-gradient(to bottom,transparent,${W})`,pointerEvents:"none"}}/>
      </section>

      {/* ══════════ STATS ══════════ */}
      <div style={{background:W,padding:"0 24px"}}>
        <div style={{maxWidth:1160,margin:"0 auto",transform:"translateY(-52px)"}}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="stats-row" 
            style={{
              display:"flex",gap:14,
              background:"#fff",borderRadius:18,padding:10,
              boxShadow:"0 10px 50px rgba(10,22,40,.04)",border:"1px solid #E2E8F0",
            }}
          >
            {STATS.map((s,i)=>(
              <motion.div key={i} variants={fadeIn} className="stat-c" style={{
                flex:1,minWidth:140,padding:"22px 24px",borderRadius:12,
                borderTop:`3px solid ${i%2===0?O:B}`,
              }}>
                <div style={{fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:"2rem",color:N,lineHeight:1,marginBottom:6}}>{s.value}</div>
                <div style={{color:S,fontSize:".82rem",fontWeight:500}}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ══════════ COURSES ══════════ */}
      <section id="courses" style={{padding:"20px 24px 100px",background:W}}>
        <div style={{maxWidth:1160,margin:"0 auto"}}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{marginBottom:52}}>
            <div className="ey">What We Offer</div>
            <h2 style={{fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:"2.3rem",color:N,lineHeight:1.18,letterSpacing:"-.02em",marginBottom:8}}>
              Courses Built for Results,<br/>Not Just Marks.
            </h2>
            <div className="db"/>
            <p style={{color:S,maxWidth:480,lineHeight:1.75,fontSize:".95rem"}}>
              Whether you're aiming for DDCET rank 1 or clearing your semester with confidence — our programs are built around outcomes.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-60px" }} 
            variants={staggerContainer} 
            className="courses-grid" 
            style={{display:"flex",gap:24,alignItems:"stretch"}}
          >
            {COURSES.map((c,i)=>(
              <motion.div 
                key={i} 
                variants={fadeIn}
                whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(10,22,40,.08)" }}
                className="cc" 
                style={{flex:1,background:"#fff",borderColor:"#E2E8F0"}}
              >
                <div style={{position:"absolute",top:0,left:0,right:0,height:4,background:c.accent,borderRadius:"18px 18px 0 0"}}/>
                <div style={{fontSize:"2.2rem",marginBottom:16}}>{c.icon}</div>
                <div className="tp" style={{background:c.accent+"15",color:c.accent,marginBottom:14}}>{c.tag}</div>
                <h3 style={{fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:"1.2rem",color:N,marginBottom:12}}>{c.title}</h3>
                <p style={{color:S,fontSize:".875rem",lineHeight:1.75,marginBottom:24}}>{c.desc}</p>
                <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:8,marginBottom:28}}>
                  {c.features.map((f,j)=>(
                    <li key={j} style={{display:"flex",alignItems:"center",gap:9,fontSize:".84rem",color:"#334155",fontWeight:500}}>
                      <span style={{width:18,height:18,borderRadius:"50%",background:c.accent+"15",color:c.accent,display:"flex",alignItems:"center",justifyContent:"center",fontSize:".65rem",fontWeight:700,flexShrink:0}}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <motion.button whileTap={{ scale: 0.97 }} className="bo" style={{background:c.accent,boxShadow:`0 4px 16px ${c.accent}33`,width:"100%",color:"#fff"}}
                  onClick={()=>goto("Contact")}>
                  Enrol in This Course
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ ABOUT ══════════ */}
      <section id="about" style={{background:"linear-gradient(155deg, #EBF2F7 0%, #DCE7F0 100%)",padding:"100px 24px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(rgba(10,22,40,.03) 1px,transparent 1px)",backgroundSize:"32px 32px",pointerEvents:"none"}}/>
        <div style={{position:"absolute",width:600,height:600,background:"radial-gradient(circle,rgba(249,115,22,.05) 0%,transparent 65%)",top:"-20%",right:"-10%",borderRadius:"50%",pointerEvents:"none"}}/>

        <div style={{maxWidth:1160,margin:"0 auto",position:"relative",zIndex:2}}>
          <div className="abt-row" style={{display:"flex",gap:64,alignItems:"center",marginBottom:80}}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{flex:1}}>
              <div className="ey" style={{color:"#F97316"}}>About Nirmaan Academy</div>
              <h2 style={{fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:"2.3rem",color:N,lineHeight:1.18,letterSpacing:"-.02em",marginBottom:20}}>
                12 Years of Shaping<br/>
                <span style={{background:"linear-gradient(90deg,#F97316,#ea580c)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClipClip:"text"}}>
                  Gujarat's Engineers.
                </span>
              </h2>
              <p style={{color:S,lineHeight:1.8,fontSize:".95rem",marginBottom:16}}>
                Founded with a single mission — make quality technical education accessible to every student in Gujarat — Nirmaan Academy has grown into the most trusted name for DDCET, Degree, and Diploma coaching in the region.
              </p>
              <p style={{color:S,lineHeight:1.8,fontSize:".95rem",marginBottom:32}}>
                Our approach is simple: deep subject mastery, relentless practice, and personal attention for every student. We don't just teach for exams — we build engineers who understand their subject.
              </p>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="bo" onClick={()=>goto("Contact")}>Talk to Us →</motion.button>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{flex:1,display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
              {[{n:"1200+",l:"Students Taught"},{n:"40+",l:"Top Rankers"},{n:"98%",l:"DDCET Pass Rate"},{n:"12+",l:"Years Teaching"}].map((s,i)=>(
                <motion.div key={i} variants={fadeIn} whileHover={{ y: -4 }} style={{background:"#fff",border:"1px solid #E2E8F0",borderRadius:14,padding:"28px 22px",boxShadow:"0 4px 20px rgba(10,22,40,.02)"}}>
                  <div style={{fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:"2rem",color:i%2===0?O:B,lineHeight:1,marginBottom:6}}>{s.n}</div>
                  <div style={{color:S,fontSize:".82rem",fontWeight:500}}>{s.l}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div style={{textAlign:"center",marginBottom:48}}>
            <div className="ey" style={{color:"#F97316",textAlign:"center"}}>Why Choose Nirmaan</div>
            <h2 style={{fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:"2rem",color:N,letterSpacing:"-.02em"}}>What Makes Us Different</h2>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="why-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
            {WHY.map((w,i)=>(
              <motion.div key={i} variants={fadeIn} whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(10,22,40,.06)" }} className="wc">
                <div style={{fontSize:"1.8rem",marginBottom:12}}>{w.icon}</div>
                <h4 style={{fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:"1rem",color:N,marginBottom:8}}>{w.title}</h4>
                <p style={{color:S,fontSize:".85rem",lineHeight:1.7}}>{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ RESULTS ══════════ */}
      <section id="results" style={{padding:"100px 24px",background:W}}>
        <div style={{maxWidth:1160,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:56}}>
            <div className="ey" style={{textAlign:"center"}}>Our Track Record</div>
            <h2 style={{fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:"2.3rem",color:N,letterSpacing:"-.02em",marginBottom:14}}>
              Results That Speak for Themselves
            </h2>
            <p style={{color:S,maxWidth:480,margin:"0 auto",lineHeight:1.7,fontSize:".95rem"}}>
              Year after year, Nirmaan Academy students dominate the DDCET rankings.
            </p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="res-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20,marginBottom:64}}>
            {RESULTS.map((r,i)=>(
              <motion.div key={i} variants={fadeIn} whileHover={{ y: -4, boxShadow: "0 10px 28px rgba(10,22,40,.1)" }} className="rc">
                <div style={{
                  width:52,height:52,borderRadius:"50%",
                  background:`linear-gradient(135deg,${i%2===0?O:B},${i%2===0?"#ea580c":"#0284C7"})`,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontFamily:"'Sora',sans-serif",fontWeight:800,color:"#fff",fontSize:"1.1rem",
                  margin:"0 auto 16px",
                }}>{r.name[0]}</div>
                <div style={{fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:"1.4rem",color:i%2===0?O:B,marginBottom:4}}>{r.rank}</div>
                <div style={{fontWeight:600,color:N,marginBottom:4,fontSize:".9rem"}}>{r.name}</div>
                <div style={{color:S,fontSize:".78rem"}}>{r.exam}</div>
                <div className="tp" style={{marginTop:12,background:i%2===0?"rgba(249,115,22,.08)":"rgba(2,132,199,.08)",color:i%2===0?O:B}}>{r.batch}</div>
              </motion.div>
            ))}
          </motion.div>

          <div style={{textAlign:"center",marginBottom:36}}>
            <div className="ey" style={{textAlign:"center"}}>What Students Say</div>
            <h3 style={{fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:"1.8rem",color:N,letterSpacing:"-.02em"}}>Straight From Our Students</h3>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="testi-row" style={{display:"flex",gap:20,flexWrap:"wrap"}}>
            {TESTIMONIALS.map((t,i)=>(
              <motion.div key={i} variants={fadeIn} className="tc">
                <div style={{display:"flex",gap:3,marginBottom:16}}>
                  {[0,1,2,3,4].map(s=><span key={s} style={{color:O,fontSize:"1rem"}}>★</span>)}
                </div>
                <p style={{color:"#334155",lineHeight:1.75,fontSize:".9rem",marginBottom:22,fontStyle:"italic"}}>"{t.text}"</p>
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  <div style={{width:40,height:40,borderRadius:"50%",background:`linear-gradient(135deg,${O},#ea580c)`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Sora',sans-serif",fontWeight:700,color:"#fff",fontSize:".9rem"}}>{t.name[0]}</div>
                  <div>
                    <div style={{fontWeight:600,fontSize:".88rem",color:N}}>{t.name}</div>
                    <div style={{fontSize:".75rem",color:S}}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section style={{padding:"100px 24px",background:W}}>
        <div style={{maxWidth:760,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:52}}>
            <div className="ey" style={{textAlign:"center"}}>FAQ</div>
            <h2 style={{fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:"2.2rem",color:N,letterSpacing:"-.02em"}}>Common Questions</h2>
          </div>
          {FAQS.map((f,i)=>(
            <div key={i} className="fqi">
              <div className="fqq" onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                <span>{f.q}</span>
                <span style={{width:28,height:28,borderRadius:"50%",background:openFaq===i?O:"#E2E8F0",color:openFaq===i?"#fff":S,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem",fontWeight:700,flexShrink:0,transition:"background .2s"}}>
                  {openFaq===i?"−":"+"}
                </span>
              </div>
              {openFaq===i&&<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} style={{padding:"0 0 20px",color:S,fontSize:".9rem",lineHeight:1.75}}>{f.a}</motion.div>}
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ CONTACT ══════════ */}
      <section id="contact" style={{background:"linear-gradient(155deg, #F0F4F8 0%, #E2EDF7 100%)",padding:"100px 24px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(10,22,40,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(10,22,40,.02) 1px,transparent 1px)",backgroundSize:"48px 48px",pointerEvents:"none"}}/>
        <div style={{position:"absolute",width:600,height:600,background:"radial-gradient(circle,rgba(249,115,22,.05) 0%,transparent 65%)",bottom:"-20%",right:"-10%",borderRadius:"50%",pointerEvents:"none"}}/>

        <div style={{maxWidth:1160,margin:"0 auto",position:"relative",zIndex:2}}>
          <div style={{textAlign:"center",marginBottom:60}}>
            <div className="ey" style={{textAlign:"center",color:"#F97316"}}>Get In Touch</div>
            <h2 style={{fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:"2.3rem",color:N,letterSpacing:"-.02em",marginBottom:14}}>Ready to Start Your Journey?</h2>
            <p style={{color:S,maxWidth:460,margin:"0 auto",lineHeight:1.7,fontSize:".95rem"}}>Fill in the form and we'll get back within 24 hours. Or drop by our centre.</p>
          </div>

          <div className="contact-row" style={{display:"flex",gap:40,alignItems:"flex-start"}}>
            <motion.div initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{flex:1.2,background:"#fff",borderRadius:20,padding:"40px 36px",border:"1px solid #E2E8F0",boxShadow:"0 10px 40px rgba(10,22,40,.03)"}}>
              {submitted ? (
                <div style={{textAlign:"center",padding:"40px 0"}}>
                  <div style={{fontSize:"3rem",marginBottom:16}}>✅</div>
                  <h3 style={{fontFamily:"'Sora',sans-serif",color:N,fontWeight:700,marginBottom:10}}>We've Got Your Details!</h3>
                  <p style={{color:S}}>Our team will reach out to you within 24 hours.</p>
                </div>
              ):(
                <form onSubmit={submit}>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
                    <div>
                      <label style={{display:"block",fontSize:".8rem",fontWeight:600,color:S,marginBottom:7,letterSpacing:".04em"}}>FULL NAME</label>
                      <input className="fi" required placeholder="Raj Patel" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
                    </div>
                    <div>
                      <label style={{display:"block",fontSize:".8rem",fontWeight:600,color:S,marginBottom:7,letterSpacing:".04em"}}>PHONE NUMBER</label>
                      <input className="fi" required placeholder="98765 43210" type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/>
                    </div>
                  </div>
                  <div style={{marginBottom:16}}>
                    <label style={{display:"block",fontSize:".8rem",fontWeight:600,color:S,marginBottom:7,letterSpacing:".04em"}}>INTERESTED COURSE</label>
                    <select className="fi" required value={form.course} onChange={e=>setForm({...form,course:e.target.value})} style={{cursor:"pointer"}}>
                      <option value="">Select a course...</option>
                      <option>DDCET Preparation</option>
                      <option>Degree Classes</option>
                      <option>Diploma Classes</option>
                    </select>
                  </div>
                  <div style={{marginBottom:24}}>
                    <label style={{display:"block",fontSize:".8rem",fontWeight:600,color:S,marginBottom:7,letterSpacing:".04em"}}>MESSAGE (OPTIONAL)</label>
                    <textarea className="fi" rows={4} placeholder="Any questions or specific requirements..." value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})} style={{resize:"vertical"}}/>
                  </div>
                  <motion.button whileTap={{ scale: 0.98 }} type="submit" className="bo" style={{width:"100%",fontSize:".95rem",padding:"15px"}}>Send Enquiry →</motion.button>
                </form>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{flex:1,display:"flex",flexDirection:"column",gap:20}}>
              {[
                {icon:"📍",label:"Our Centre",val:"Nirmaan Academy, Ahmedabad, Gujarat"},
                {icon:"📞",label:"Call Us",val:"+91 98765 43210"},
                {icon:"📧",label:"Email",val:"info@nirmaanacademy.in"},
                {icon:"🕘",label:"Timings",val:"Mon–Sat: 8:00 AM – 8:00 PM"},
              ].map((inf,i)=>(
                <div key={i} style={{display:"flex",gap:16,alignItems:"flex-start",background:"#fff",borderRadius:14,padding:"18px 20px",border:"1px solid #E2E8F0",boxShadow:"0 4px 20px rgba(10,22,40,.01)"}}>
                  <span style={{fontSize:"1.4rem",flexShrink:0}}>{inf.icon}</span>
                  <div>
                    <div style={{fontSize:".72rem",fontWeight:700,color:S,letterSpacing:".08em",textTransform:"uppercase",marginBottom:3}}>{inf.label}</div>
                    <div style={{color:N,fontSize:".9rem",fontWeight:500}}>{inf.val}</div>
                  </div>
                </div>
              ))}
              <div style={{background:"linear-gradient(135deg,#F97316,#ea580c)",borderRadius:16,padding:"26px 22px",boxShadow:"0 8px 32px rgba(249,115,22,.25)"}}>
                <div style={{fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:"1.15rem",color:"#fff",marginBottom:8}}>Free Demo Class Available</div>
                <p style={{color:"rgba(255,255,255,.9)",fontSize:".87rem",lineHeight:1.6,marginBottom:16}}>Not sure yet? Attend a free demo class and experience our teaching first-hand.</p>
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="bg" style={{border:"1.5px solid rgba(255,255,255,.8)",color:"#fff",fontSize:".85rem",padding:"10px 22px"}}>Book a Free Demo</motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer style={{background:"#0A1628",padding:"48px 24px 28px"}}>
        <div style={{maxWidth:1160,margin:"0 auto"}}>
          <div style={{display:"flex",gap:48,marginBottom:40,flexWrap:"wrap"}}>
            <div style={{flex:1.5,minWidth:220}}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
                <div style={{width:36,height:36,background:"linear-gradient(135deg,#F97316,#ea580c)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Sora',sans-serif",fontWeight:800,color:"#fff",fontSize:"1rem"}}>N</div>
                <div>
                  <div style={{fontFamily:"'Sora',sans-serif",fontWeight:800,color:"#fff",fontSize:"1rem",lineHeight:1.1}}>Nirmaan Academy</div>
                  <div style={{fontSize:".6rem",color:"#64748B",letterSpacing:".1em",textTransform:"uppercase"}}>Technical Coaching Centre</div>
                </div>
              </div>
              <p style={{color:"#94A3B8",fontSize:".85rem",lineHeight:1.7,maxWidth:280}}>Gujarat's most trusted coaching centre for DDCET, Degree and Diploma students since 2012.</p>
            </div>
            {[
              {heading:"Courses",links:["DDCET Preparation","Degree Classes","Diploma Classes","Demo Class"]},
              {heading:"Academy",links:["About Us","Results","Testimonials","FAQ"]},
            ].map((col,i)=>(
              <div key={i} style={{flex:1,minWidth:140}}>
                <div style={{fontFamily:"'Sora',sans-serif",fontWeight:700,fontSize:".82rem",color:"#fff",letterSpacing:"-.01em",textTransform:"uppercase",marginBottom:16}}>{col.heading}</div>
                <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
                  {col.links.map(l=>(
                    <li key={l}>
                      <a href="#" style={{color:"#94A3B8",fontSize:".85rem",textDecoration:"none",transition:"color .2s"}}
                        onMouseEnter={e=>e.target.style.color="#F97316"}
                        onMouseLeave={e=>e.target.style.color="#94A3B8"}>
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{borderTop:"1px solid rgba(255,255,255,.07)",paddingTop:24,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
            <p style={{color:"#64748B",fontSize:".8rem"}}>© 2024 Nirmaan Academy · Ahmedabad, Gujarat · All rights reserved.</p>
            <p style={{color:"#64748B",fontSize:".8rem"}}>Made for students, by educators who care.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}