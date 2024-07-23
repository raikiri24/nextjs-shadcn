"use client";

import { Card } from "@/components/ui/card";

type Props = {
  header: string;
  count: string;
};

function Chart({ header, count }: Props) {
  return (
    <Card className={"border-zinc-200 p-6 dark:border-zinc-800 w-full"}>
      <div className="flex items-center gap-3">
        <div>
          <h5 className="text-sm font-medium leading-5 text-zinc-950 dark:text-white">
            {header}
          </h5>
          <p className="mt-1 text-2xl font-bold leading-6 text-zinc-950 dark:text-white">
            {count}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default Chart;
