import { Boxes, CircleHelp, Handshake, UsersRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";
import sideNavDocumentationSlice from "@/lib/_redux/slices/sidenavDocumentationSlice";
import { useDispatch, useSelector } from "react-redux";

const SidebarFaqs = ({ className }: { className: any }) => {
  const router = useRouter();
  const { setActiveKey } = sideNavDocumentationSlice.actions;
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.sideNavDoc);
  const { activeKey } = state;
  return (
    <div className={cn("pb-12", className)} id="SidebarMenuDocs">
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight flex items-center">
            FAQs
          </h2>
          <div className="space-y-1">
            <Button
              variant={`${
                activeKey === "how-to-create-pr" ? "secondary" : "ghost"
              }`}
              size="sm"
              className={`w-full justify-start ${
                activeKey === "how-to-create-pr"
                  ? "white"
                  : "w-full justify-start text-gray-500"
              }`}
              onClick={() => {
                dispatch(setActiveKey("how-to-create-pr"));
                router.push("/");
              }}
            >
              How to create a Purchase Request
            </Button>
            <Button
              variant={`${activeKey === "outbound" ? "secondary" : "ghost"}`}
              size="sm"
              className={`w-full justify-start ${
                activeKey === "outbound"
                  ? "white"
                  : "w-full justify-start text-gray-500"
              }`}
              onClick={() => {
                dispatch(setActiveKey("outbound"));
                router.push("/faqs/procurenet/outbound");
              }}
            >
              Outbound
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarFaqs;
