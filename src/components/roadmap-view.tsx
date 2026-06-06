"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Circle,
  ExternalLink,
  BookOpen,
  Play as PlayCircle,
  FileText,
  Globe,
  Gamepad2,
  Lightbulb,
  ChevronRight,
  Trophy,
  Rocket,
  Brain,
  Search,
  LayoutDashboard,
} from "lucide-react";
import {
  PHASES,
  type Phase,
  type Section,
  type Topic,
  type Resource,
} from "@/lib/roadmap-data";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// --- Types & Storage Helpers ---
const STORAGE_KEY = "ml-roadmap-progress";

export default function RoadmapView() {
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(
    new Set(),
  );
  const [activePhase, setActivePhase] = useState<number>(0);
  const [isMounted, setIsMounted] = useState(false);

  // Load progress from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setCompletedTopics(new Set(JSON.parse(saved)));
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
    setIsMounted(true);
  }, []);

  // Save progress whenever it changes
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(Array.from(completedTopics)),
      );
    }
  }, [completedTopics, isMounted]);

  const toggleTopic = (topicKey: string) => {
    setCompletedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(topicKey)) next.delete(topicKey);
      else next.add(topicKey);
      return next;
    });
  };

  // Calculate stats
  const totalTopics = PHASES.reduce(
    (acc, phase) =>
      acc +
      phase.sections.reduce((sAcc, section) => sAcc + section.topics.length, 0),
    0,
  );

  const completedCount = completedTopics.size;
  const progressPercent =
    totalTopics > 0 ? (completedCount / totalTopics) * 100 : 0;

  const currentPhase = PHASES[activePhase];

  if (!isMounted) return null;

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a12] text-white font-sans selection:bg-indigo-500/30">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a12]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-500/20">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">
                AI Master Roadmap <span className="text-indigo-400">2026</span>
              </h1>
              <p className="text-xs text-white/50 uppercase tracking-widest font-mono">
                Zero to Pro in AI Engineering
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 w-full md:w-64">
            <div className="flex justify-between w-full text-xs font-mono mb-1">
              <span className="text-white/60">YOUR JOURNEY</span>
              <span className="text-indigo-400 font-bold">
                {Math.round(progressPercent)}%
              </span>
            </div>
            <Progress
              value={progressPercent}
              className="h-2 w-full bg-white/5 overflow-hidden"
            />
            <div className="text-[10px] text-white/40 mt-1">
              {completedCount} / {totalTopics} TOPICS COMPLETED
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Navigation */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] px-2 mb-2">
              Curriculum Blocks
            </p>
            {PHASES.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={cn(
                  "w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 group relative overflow-hidden",
                  activePhase === phase.id
                    ? "bg-indigo-600/10 text-white translate-x-1"
                    : "text-white/40 hover:text-white/70 hover:bg-white/5",
                )}
              >
                {activePhase === phase.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute left-0 top-2 bottom-2 w-1 bg-indigo-500 rounded-full"
                  />
                )}
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "text-xs font-mono px-1.5 py-0.5 rounded border transition-colors",
                      activePhase === phase.id
                        ? "border-indigo-500/50 text-indigo-400"
                        : "border-white/10",
                    )}
                  >
                    P{phase.id}
                  </span>
                  <span className="font-medium text-sm">{phase.title}</span>
                </div>
                {activePhase === phase.id && (
                  <ChevronRight className="w-4 h-4 text-indigo-500" />
                )}
              </button>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-white/5 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-yellow-500/80 cursor-help">
                  Goal 2026
                </span>
              </div>
              <p className="text-sm font-medium leading-relaxed">
                Aim for a junior-to-mid Machine Learning Role or build your own
                AI startup.
              </p>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <Rocket className="w-24 h-24" />
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <div className="lg:col-span-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Phase Header */}
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <Badge
                    variant="outline"
                    className="bg-indigo-500/10 text-indigo-400 border-indigo-500/20 px-3 py-1 font-mono uppercase"
                  >
                    Phase {currentPhase.id}
                  </Badge>
                  <span className="text-white/40 text-sm flex items-center gap-1.5">
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    {currentPhase.time}
                  </span>
                </div>
                <h2 className="text-4xl font-extrabold tracking-tight mb-4">
                  {currentPhase.title}
                </h2>
                <div className="h-1 w-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mb-8" />
              </div>

              {/* Sections */}
              <div className="grid grid-cols-1 gap-6">
                {currentPhase.sections.map((section, idx) => (
                  <SectionCard
                    key={idx}
                    section={section}
                    phaseId={currentPhase.id}
                    completedTopics={completedTopics}
                    onToggleTopic={toggleTopic}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <footer className="mt-20 border-t border-white/5 py-12 bg-[#090910]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/30 text-sm">
            Built with passion for the AI community. &copy; 2026 AI Roadmap.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionCard({
  section,
  phaseId,
  completedTopics,
  onToggleTopic,
}: {
  section: Section;
  phaseId: number;
  completedTopics: Set<string>;
  onToggleTopic: (key: string) => void;
}) {
  return (
    <Card className="bg-[#1a1a2a]/40 border-white/5 overflow-hidden backdrop-blur-sm group hover:border-indigo-500/20 transition-colors">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-inner bg-white/5 border border-white/10 group-hover:scale-105 transition-transform duration-300">
              {section.icon}
            </div>
            <div>
              <CardTitle className="text-xl font-bold group-hover:text-indigo-400 transition-colors">
                {section.name}
              </CardTitle>
              <CardDescription className="text-white/50 text-xs mt-1">
                {section.topics.length} topics • {section.resources.length}{" "}
                resources
              </CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Topics List */}
        <div className="space-y-3">
          <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
            Concepts to Master
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {section.topics.map((topic, i) => {
              const topicKey = `${phaseId}-${section.name}-${topic.t}`;
              const isDone = completedTopics.has(topicKey);

              return (
                <div
                  key={i}
                  onClick={() => onToggleTopic(topicKey)}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer select-none group/topic",
                    isDone
                      ? "bg-indigo-600/10 border-indigo-500/20 text-indigo-100"
                      : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10",
                  )}
                >
                  <div
                    className={cn(
                      "w-5 h-5 rounded-md flex items-center justify-center transition-all",
                      isDone
                        ? "bg-indigo-500 text-white"
                        : "border-2 border-white/10 text-transparent group-hover/topic:border-indigo-500/50",
                    )}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={cn(
                        "text-sm transition-all truncate",
                        isDone && "opacity-50 line-through",
                      )}
                    >
                      {topic.t}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-white/5 text-[10px] uppercase font-bold text-white/40 h-5 px-1.5"
                  >
                    {topic.tag}
                  </Badge>
                </div>
              );
            })}
          </div>
        </div>

        {/* Resources */}
        <div className="space-y-3 pt-4 border-t border-white/5">
          <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
            Verified Resources
          </h4>
          <div className="flex flex-wrap gap-2">
            {section.resources.map((res, i) => (
              <a
                key={i}
                href={res.u}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-indigo-500/30 transition-all group/res"
              >
                <ResourceIcon type={res.t} />
                <span className="text-xs font-medium text-white/70 group-hover/res:text-white transition-colors">
                  {res.n}
                </span>
                <ExternalLink className="w-3 h-3 text-white/20 group-hover/res:text-indigo-400" />
              </a>
            ))}
          </div>
        </div>

        {/* Tip */}
        <div className="flex gap-3 p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 items-start">
          <Lightbulb className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
          <p className="text-sm text-indigo-100/70 italic leading-relaxed">
            "{section.tip}"
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function ResourceIcon({ type }: { type: Resource["t"] }) {
  switch (type) {
    case "yt":
      return <PlayCircle className="w-3.5 h-3.5 text-red-500" />;
    case "book":
      return <BookOpen className="w-3.5 h-3.5 text-blue-400" />;
    case "docs":
      return <FileText className="w-3.5 h-3.5 text-emerald-400" />;
    case "paper":
      return <FileText className="w-3.5 h-3.5 text-pink-400" />;
    case "course":
      return <LayoutDashboard className="w-3.5 h-3.5 text-indigo-400" />;
    case "platform":
      return <Globe className="w-3.5 h-3.5 text-orange-400" />;
    case "blog":
      return <FileText className="w-3.5 h-3.5 text-purple-400" />;
    case "tool":
      return <Gamepad2 className="w-3.5 h-3.5 text-cyan-400" />;
    case "api":
      return <Globe className="w-3.5 h-3.5 text-amber-400" />;
    case "model":
      return <Rocket className="w-3.5 h-3.5 text-violet-400" />;
    default:
      return <Circle className="w-3.5 h-3.5 text-white/20" />;
  }
}
