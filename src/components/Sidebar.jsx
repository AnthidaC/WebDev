import React from 'react';
import { BookOpen, Award, CheckCircle2, Circle, Star, Sparkles } from 'lucide-react';

export default function Sidebar({ lessons, challenges, activeId, setActiveId, progress, isOpen }) {
  // Group lessons by category
  const categories = {};
  lessons.forEach((lesson) => {
    if (!categories[lesson.category]) {
      categories[lesson.category] = [];
    }
    categories[lesson.category].push(lesson);
  });

  return (
    <aside className={`app-sidebar ${isOpen ? '' : 'collapsed'}`}>
      {/* Lessons Section */}
      {Object.keys(categories).map((catName) => (
        <div key={catName} className="sidebar-section">
          <h3 className="sidebar-title">{catName}</h3>
          {categories[catName].map((lesson) => {
            const isCompleted = progress[lesson.id];
            const isActive = activeId === lesson.id;

            return (
              <button
                key={lesson.id}
                onClick={() => setActiveId(lesson.id)}
                className={`sidebar-item ${isActive ? 'active' : ''}`}
              >
                <div className="item-left">
                  <span className="status-badge">
                    {isCompleted ? (
                      <CheckCircle2 size={16} className="status-check" />
                    ) : (
                      <Circle size={16} className="text-slate-400" />
                    )}
                  </span>
                  <span>{lesson.title.replace(/^\d+\.\s*/, '')}</span>
                </div>
              </button>
            );
          })}
        </div>
      ))}

      {/* Challenges Section */}
      <div className="sidebar-section">
        <h3 className="sidebar-title">
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Sparkles size={12} className="text-yellow-500" /> ภารกิจท้าทาย (Challenges)
          </span>
        </h3>
        {challenges.map((challenge) => {
          const isCompleted = progress[challenge.id];
          const isActive = activeId === challenge.id;

          return (
            <button
              key={challenge.id}
              onClick={() => setActiveId(challenge.id)}
              className={`sidebar-item ${isActive ? 'active' : ''}`}
              style={{ paddingRight: '6px' }}
            >
              <div className="item-left">
                <span className="status-badge">
                  {isCompleted ? (
                    <Star size={16} className="status-star" />
                  ) : (
                    <Award size={16} className="text-slate-400" />
                  )}
                </span>
                <span style={{ fontWeight: '500' }}>
                  {challenge.title.replace(/^ภารกิจที่\s*\d+:\s*/, '')}
                </span>
              </div>
              <span className={`difficulty-badge ${challenge.difficulty.toLowerCase()}`}>
                {challenge.difficulty}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
