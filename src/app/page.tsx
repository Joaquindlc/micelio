import { BentoCard } from "@/components/BentoCard";
import { css } from "@/styled-system/css";
import { grid, flex } from "@/styled-system/patterns";
import { taskPill } from "@/styled-system/recipes";

const tareasMicelio = [
  { id: 1, texto: "Riego Lote A (09:00)", completada: true, hora: "09:00" },
  { id: 2, texto: "Control de PH Lote B", completada: false, hora: "11:30" },
  { id: 3, texto: "Cosecha Sector 08", completada: false, hora: "16:00" },
  { id: 4, texto: "Limpieza de Sensores", completada: true, hora: "08:00" },
  { id: 5, texto: "Limpieza de Sensores", completada: true, hora: "08:00" },
  { id: 6, texto: "Limpieza de Sensores", completada: true, hora: "08:00" },
  { id: 7, texto: "Limpieza de Sensores", completada: true, hora: "08:00" },
];

export default function HomePage() {
  return (
    <div className={css({ p: "8", maxW: "1400px", mx: "auto" })}>
      <header className={css({ mb: "10" })}>
        <h1 className={css({ fontSize: "3xl", fontWeight: "bold" })}>
          Monitoreo de Cultivos
        </h1>
      </header>

      <div
        className={grid({
          columns: { base: 1, md: 3, lg: 4 },
          gap: "6",
          gridAutoRows: "minmax(180px, auto)",
        })}
      >
        {/* Card Principal de Mapa/Vista */}
        <BentoCard title="Calendario" variant="large">
          <div
            className={css({
              bg: "accent/5",
              h: "full",
              borderRadius: "lg",
              border: "2px dashed {colors.accent/20}",
            })}
          />
        </BentoCard>

        {/* Sensores Rápidos */}
        <BentoCard title="Temperatura" value={24} unit="°C" icon="🌡️" />
        <BentoCard title="Humedad" value={82} unit="%" icon="💧" />

        {/* Card de Estado Especial (Verde como en tu referencia) */}
        <BentoCard
          title="Salud General"
          value={94}
          unit="%"
          variant="active"
          icon="🌱"
        />

        {/* Card de Tareas */}
        <BentoCard title="Tareas Hoy" icon="📋" variant="large">
          <div
            className={flex({
              direction: "column",
              gap: "4",
              mt: "4",
            })}
          >
            {tareasMicelio.map((tarea) => (
              <div
                key={tarea.id}
                className={taskPill({
                  status: tarea.completada ? "completed" : "pending",
                })}
              >
                <span>{tarea.completada ? "✅" : "⏳"}</span>
                <span className={css({ flex: 1 })}>{tarea.texto}</span>
                <span
                  className={css({
                    fontSize: "10px",
                    bg: "accent/20",
                    px: "1.5",
                    py: "0.5",
                    borderRadius: "sm",
                  })}
                >
                  {tarea.hora}
                </span>
              </div>
            ))}
          </div>
        </BentoCard>
      </div>
    </div>
  );
}
