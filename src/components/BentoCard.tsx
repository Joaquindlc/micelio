import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";
import {card} from "@/styled-system/recipes";


interface BentoCardProps {
  title: string;
  value?: string | number;
  unit?: string;
  icon?: string;
  children?: React.ReactNode;
  variant?: "default" | "active" | "large";
}

export const BentoCard = ({
  title,
  value,
  unit,
  icon,
  children,
  variant = "default",
}: BentoCardProps) => {
  return (
    {/* <div
      className={css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        bg: variant === "active" ? "green.500" : "bg.default",
        color: variant === "active" ? "white" : "text",
        borderRadius: "2xl",
        p: "6",
        border: "1px solid",
        borderColor: variant === "active" ? "transparent" : "accent/20",
        gridColumn: variant === "large" ? { md: "span 2" } : "span 1",
        gridRow: variant === "large" ? "span 2" : "span 1",
        transition: "all 0.2s ease",
        _hover: { transform: "translateY(-4px)", boxShadow: "xl" },
      })} 
    >
      */}
      <div className={card({ 
        size: variant === "large" ? "large" : "small",
        status: variant === "active" ? "active" : "default" 
      })}>
      <div
        className={flex({ justify: "space-between", align: "center", mb: "4" })}
      >
        <span className={css({ fontWeight: "medium", opacity: 0.8 })}>
          {icon} {title}
        </span>
      </div>

      {value && (
        <div>
          <span
            className={css({
              fontSize: "4xl",
              fontWeight: "900",
              letterSpacing: "tighter",
            })}
          >
            {value}
          </span>
          {unit && (
            <span className={css({ ml: "1", fontSize: "lg", opacity: 0.7 })}>
              {unit}
            </span>
          )}
        </div>
      )}

      {children}
    </div>
  );
};
