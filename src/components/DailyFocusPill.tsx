import type { ReactNode } from "react";
import React from "react";

export type DailyFocusPillProps = {
  project: string;
  study: string;
  nextLabel?: string;
  nextValue?: string;
  nextStudy?: string;
  nextProject?: string;
  icon?: ReactNode;
  className?: string;
};

const truncate = (text: string, max: number) =>
  text.length > max ? `${text.slice(0, max - 1)}…` : text;

export const DailyFocusPill: React.FC<DailyFocusPillProps> = ({
  project,
  study,
  nextLabel = "Mañana",
  nextValue,
  nextStudy,
  nextProject,
  icon = "🎯",
  className = "",
}) => {
  const nextText = nextValue ? truncate(nextValue, 48) : undefined;
  const nextStudyText = nextStudy ?? nextText;
  const nextProjectText = nextProject ?? undefined;
  const hasNext = Boolean(nextStudyText || nextProjectText);

  return (
    <section className={`pill ${className}`.trim()}>
      <div className="pill__icon">{icon}</div>

      <div className="pill__today">
        <span className="pill__title pill__title--primary">Foco de hoy</span>
        <div className="pill__item">
          <span className="pill__label">- Estudio</span>
          <span className="pill__value" title={study}>
            {truncate(study, 32)}
          </span>
        </div>
        <div className="pill__item">
          <span className="pill__label">- Proyecto</span>
          <span className="pill__value" title={project}>
            {truncate(project, 32)}
          </span>
        </div>
      </div>

      {hasNext ? (
        <div className="pill__tomorrow">
          <span className="pill__title pill__title--muted">{nextLabel}</span>
          {nextStudyText ? (
            <div className="pill__item">
              <span className="pill__label">- Estudio</span>
              <span className="pill__value" title={nextStudyText}>
                {truncate(nextStudyText, 48)}
              </span>
            </div>
          ) : null}
          {nextProjectText ? (
            <div className="pill__item">
              <span className="pill__label">- Proyecto</span>
              <span className="pill__value" title={nextProjectText}>
                {truncate(nextProjectText, 48)}
              </span>
            </div>
          ) : null}
        </div>
      ) : null}

      <style>{`
        .pill {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          gap: 8px 12px;
          border: 2px solid #000;
          border-radius: 6px;
          padding: 8px;
        }
        .pill__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
         
          border-radius: 6px;
          padding: 3px;
          font-size: 22px;
        }
        .pill__today {
          display: flex;
          flex-direction: column;
          gap: 2px;
          border-radius: 6px;
          padding: 4px;
          flex: 1 1 240px;
        }
        .pill__title {
          font-weight: 900;
          letter-spacing: 0.02em;
          margin-bottom: 2px;
        }
        .pill__title--primary {
          opacity: 1;
        }
        .pill__title--muted {
          opacity: 1;
        }
        .pill__item {
          display: flex;
          gap: 4px;
          border: 1px solid #000;
          border-radius: 4px;
          padding: 2px 3px;
          flex-wrap: wrap;
          align-items: center;
        }
        .pill__label {
          font-weight: 600;
        }
        .pill__value {
          font-weight: 600;
        }
        .pill__tomorrow {
          display: flex;
          flex-direction: column;
          gap: 2px;
          border-radius: 6px;
          padding: 4px;
          flex: 1 1 200px;
          opacity: 0.35;
        }
        @media (max-width: 599px) {
          .pill__icon {
            width: 100%;
            justify-content: center;
          }
        }
        @media (max-width: 600px) {
          .pill__title {
            display: none;
          }
        }
             @media (min-width: 400px) {
          .pill__icon {
            display: center;
          }
        }
               @media (max-width: 600px) {
          .pill__icon {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
