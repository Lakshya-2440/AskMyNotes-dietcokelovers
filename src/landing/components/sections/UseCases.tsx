import * as React from "react"
import { motion } from "framer-motion"

export function UseCases() {
  return (
    <section 
      id="use-cases" 
      className="relative w-full py-48 overflow-hidden"
      style={{ backgroundColor: '#ffffffff', color: '#2c2b29ff' }}
    >
      <div className="absolute top-0 right-0 w-[40%] h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #F3F0E7 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">When Precision Matters</h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            Designed for the crucible of academia, where "almost right" is entirely wrong.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <UseCaseCard 
            title="Pre-Exam Revision"
            description="Consolidate weeks of lectures. Ask for summaries of complex topics, and get answers cited directly from your syllabus."
            delay={0.1}
          >
            <svg viewBox="0 0 200 120" className="w-full h-full  /60" fill="none" stroke="currentColor">
              <rect x="20" y="20" width="60" height="80" rx="4" strokeWidth="1.5" />
              <path d="M25 35h50 M25 50h40 M25 65h50 M25 80h30" strokeWidth="1" strokeDasharray="4 2" />
              <path d="M90 60 c 20 0, 20 -20, 40 -20" strokeWidth="1.5" />
              <path d="M90 60 c 20 0, 20 20, 40 20" strokeWidth="1.5" />
              <rect x="140" y="25" width="40" height="30" rx="2" strokeWidth="1.5" />
              <rect x="140" y="65" width="40" height="30" rx="2" strokeWidth="1.5" />
              <circle cx="160" cy="40" r="4" fill="currentColor" />
              <circle cx="160" cy="80" r="4" fill="currentColor" />
            </svg>
          </UseCaseCard>

          {/* Case 2: Assignments */}
          <UseCaseCard 
            title="Solving Assignments"
            description="Break through writer's block. When you're stuck on a prompt, locate the exact theorem or case study needed to proceed."
            delay={0.3}
          >
            <svg viewBox="0 0 200 120" className="w-full h-full  /60" fill="none" stroke="currentColor">
              <circle cx="50" cy="60" r="25" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="50" cy="60" r="4" fill="currentColor" />
              <path d="M75 60 L 130 60" strokeWidth="2" strokeDasharray="4 2" />
              <rect x="130" y="40" width="40" height="40" rx="4" strokeWidth="2" />
              <path d="M140 50h20 M140 60h15 M140 70h20" strokeWidth="1.5" />
              <path d="M130 60 L 125 55 L 125 65 Z" fill="currentColor" />
            </svg>
          </UseCaseCard>

          {/* Case 3: Doubt Clearing */}
          <UseCaseCard 
            title="Last-Minute Doubts"
            description="Resolve late-night confusion instantly. Don't wait for office hours to clarify conflicting definitions across chapters."
            delay={0.5}
          >
             <svg viewBox="0 0 200 120" className="w-full h-full  /60" fill="none" stroke="currentColor">
              <rect x="20" y="20" width="45" height="40" rx="2" strokeWidth="1.5" />
              <rect x="20" y="70" width="45" height="30" rx="2" strokeWidth="1.5" />
              <path d="M65 40 Q 100 40, 100 60 T 130 60" strokeWidth="1.5" />
              <path d="M65 85 Q 100 85, 100 60" strokeWidth="1.5" />
              <circle cx="150" cy="60" r="20" strokeWidth="1.5" />
              <path d="M142 60 L 148 66 L 158 54" strokeWidth="2" />
            </svg>
          </UseCaseCard>

        </div>
      </div>
    </section>
  )
}

function UseCaseCard({ title, description, children, delay }: { title: string, description: string, children: React.ReactNode, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group flex flex-col items-center text-center rounded-[32px] p-10 bg-paleivory/5 border border-paleivory/10 shadow-paper backdrop-blur-sm transition-all hover:bg-paleivory/10 hover:border-paleivory/20"
    >
      <div className="w-full h-44 mb-10 bg-paleivory/[0.03] rounded-24 border border-paleivory/5 overflow-hidden p-8 relative flex items-center justify-center">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #F3F0E7 1px, transparent 0)', backgroundSize: '16px 16px' }} />
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </div>
      <h3 className="text-2xl font-serif   font-medium mb-4">{title}</h3>
      <p className=" leading-relaxed text-[15px]">
        {description}
      </p>
    </motion.div>
  )
}
