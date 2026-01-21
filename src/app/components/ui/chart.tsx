"use client";

import * as React from "react";
import type { ComponentProps } from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "./utils";

type ChartTooltipProps = ComponentProps<typeof RechartsPrimitive.Tooltip> &
  ComponentProps<"div"> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
  };

type ChartConfig = {
  [key: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<string, string> }
  );
};

type TooltipPayloadItem = {
  name?: string;
  dataKey?: string;
  value?: number | string;
  color?: string;
  payload?: Record<string, any>;
};

const ChartContext = React.createContext<{ config: ChartConfig } | null>(null);

function useChart() {
  const ctx = React.useContext(ChartContext);
  if (!ctx) throw new Error("ChartTooltipContent must be inside ChartContainer");
  return ctx;
}



function ChartTooltipContent({
  active,
  payload = [],
  className,
  hideLabel = false,
  label,
  labelFormatter,
  labelClassName,
  nameKey,
  labelKey,
}: ChartTooltipProps) {
  const { config } = useChart();

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || payload.length === 0) return null;

    const item = payload[0];
    const key = `${labelKey || item.dataKey || item.name || "value"}`;

    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value =
      !labelKey && typeof label === "string"
        ? config[label]?.label ?? label
        : itemConfig?.label;

    if (!value) return null;

    return (
      <div className={cn("font-medium", labelClassName)}>
        {labelFormatter ? labelFormatter(value, payload) : value}
      </div>
    );
  }, [payload, hideLabel, label, labelFormatter, labelClassName, config, labelKey]);

  if (!active || payload.length === 0) return null;

  return (
    <div className={cn("rounded-lg border bg-background p-2 text-xs", className)}>
      {tooltipLabel}

      <div className="grid gap-1.5">
        {payload.map((item: TooltipPayloadItem, index: number) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          return (
            <div key={index} className="flex justify-between gap-2">
              <span className="text-muted-foreground">
                {itemConfig?.label ?? item.name}
              </span>
              {item.value != null && (
                <span className="font-mono">
                  {item.value.toLocaleString()}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Helper function (keep your existing logic)
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: any,
  key: string
) {
  if (typeof payload !== "object" || payload === null) return undefined;

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config];
}

export { ChartTooltipContent };
