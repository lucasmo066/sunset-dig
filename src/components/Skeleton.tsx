import { Skeleton } from "@/components/ui/skeleton"
 
export function SkeletonHomePage() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[325px] w-full rounded-xl" />
      </div>
  )
}