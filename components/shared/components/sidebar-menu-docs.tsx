import { Boxes, Handshake, UsersRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";

const SidebarDocumentation = ({ className }: { className: any }) => {
  const router = useRouter();
  return (
    <div className={cn("pb-12", className)} id="SidebarMenuDocs">
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight flex items-center">
            <Handshake className="mr-2 h-4 w-4" />
            ProcureNet
          </h2>
          <div className="space-y-1">
            <Button
              variant="secondary"
              size="sm"
              className="w-full justify-start"
              onClick={() => {
                router.push("/documentation/procurenet/inbound");
              }}
            >
              Inbound
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-gray-500"
              onClick={() => {
                router.push("/documentation/procurenet/outbound");
              }}
            >
              Outbound
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight flex items-center">
            <Boxes className="mr-2 h-4 w-4" />
            SaaS Management
          </h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-gray-500"
            >
              Add an Application
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-gray-500"
            >
              Update an Application
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-gray-500"
            >
              Delete an Application
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-gray-500"
            >
              Bulk upload an Application
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-gray-500"
            >
              List Applications
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-gray-500"
            >
              Get an Application
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight flex items-center">
            <UsersRound className="mr-2 h-4 w-4" />
            Employee Roster
          </h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-gray-500"
            >
              Add an Application
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-gray-500"
            >
              Update an Application
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-gray-500"
            >
              Delete an Application
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-gray-500"
            >
              Bulk upload an Application
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-gray-500"
            >
              List Applications
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-gray-500"
            >
              Get an Application
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarDocumentation;
