import { Boxes, Handshake, UsersRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";
import sideNavDocumentationSlice from "@/lib/_redux/slices/sidenavDocumentationSlice";
import { useDispatch, useSelector } from "react-redux";

const SidebarDocumentation = ({ className }: { className: any }) => {
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
            <Handshake className="mr-2 h-4 w-4" />
            ProcureNet
          </h2>
          <div className="space-y-1">
            <Button
              variant={`${activeKey === "inbound" ? "secondary" : "ghost"}`}
              size="sm"
              className={`w-full justify-start ${
                activeKey === "inbound"
                  ? "white"
                  : "w-full justify-start text-gray-500"
              }`}
              onClick={() => {
                dispatch(setActiveKey("inbound"));
                router.push("/documentation/procurenet/inbound");
              }}
            >
              Inbound
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
              variant={`${
                activeKey === "add-application" ? "secondary" : "ghost"
              }`}
              size="sm"
              className={`w-full justify-start ${
                activeKey === "add-application"
                  ? "white"
                  : "w-full justify-start text-gray-500"
              }`}
              onClick={() => {
                dispatch(setActiveKey("add-application"));
                router.push("/documentation/saas-management/add-application");
              }}
            >
              Add an Application
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`w-full justify-start ${
                activeKey === "update-application"
                  ? "white"
                  : "w-full justify-start text-gray-500"
              }`}
              onClick={() => {
                dispatch(setActiveKey("update-application"));
                router.push(
                  "/documentation/saas-management/update-application"
                );
              }}
            >
              Update an Application
            </Button>
            <Button
              variant={`${
                activeKey === "delete-application" ? "secondary" : "ghost"
              }`}
              size="sm"
              className={`w-full justify-start ${
                activeKey === "delete-application"
                  ? "white"
                  : "w-full justify-start text-gray-500"
              }`}
              onClick={() => {
                dispatch(setActiveKey("delete-application"));
                router.push(
                  "/documentation/saas-management/delete-application"
                );
              }}
            >
              Delete an Application
            </Button>
            <Button
              variant={`${
                activeKey === "bulk-applications" ? "secondary" : "ghost"
              }`}
              size="sm"
              className={`w-full justify-start ${
                activeKey === "bulk-applications"
                  ? "white"
                  : "w-full justify-start text-gray-500"
              }`}
              onClick={() => {
                dispatch(setActiveKey("bulk-applications"));
                router.push("/documentation/saas-management/bulk-applications");
              }}
            >
              Bulk upload an Application
            </Button>
            <Button
              variant={`${
                activeKey === "list-applications" ? "secondary" : "ghost"
              }`}
              size="sm"
              className={`w-full justify-start ${
                activeKey === "list-applications"
                  ? "white"
                  : "w-full justify-start text-gray-500"
              }`}
              onClick={() => {
                dispatch(setActiveKey("list-applications"));
                router.push("/documentation/saas-management/list-applications");
              }}
            >
              List Applications
            </Button>
            <Button
              variant={`${
                activeKey === "get-application" ? "secondary" : "ghost"
              }`}
              size="sm"
              className={`w-full justify-start ${
                activeKey === "get-application"
                  ? "white"
                  : "w-full justify-start text-gray-500"
              }`}
              onClick={() => {
                dispatch(setActiveKey("get-application"));
                router.push("/documentation/saas-management/get-application");
              }}
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
              variant={`${
                activeKey === "add-employee" ? "secondary" : "ghost"
              }`}
              size="sm"
              className={`w-full justify-start ${
                activeKey === "add-employee"
                  ? "white"
                  : "w-full justify-start text-gray-500"
              }`}
              onClick={() => {
                dispatch(setActiveKey("add-employee"));
                router.push("/documentation/employee-roster/add-employee");
              }}
            >
              Add an Employee
            </Button>
            <Button
              variant={`${
                activeKey === "update-employee" ? "secondary" : "ghost"
              }`}
              size="sm"
              className={`w-full justify-start ${
                activeKey === "update-employee"
                  ? "white"
                  : "w-full justify-start text-gray-500"
              }`}
              onClick={() => {
                dispatch(setActiveKey("update-employee"));
                router.push("/documentation/employee-roster/update-employee");
              }}
            >
              Update an Employee
            </Button>
            <Button
              variant={`${
                activeKey === "delete-employee" ? "secondary" : "ghost"
              }`}
              size="sm"
              className={`w-full justify-start ${
                activeKey === "delete-employee"
                  ? "white"
                  : "w-full justify-start text-gray-500"
              }`}
              onClick={() => {
                dispatch(setActiveKey("delete-employee"));
                router.push("/documentation/employee-roster/delete-employee");
              }}
            >
              Delete an Employee
            </Button>
            <Button
              variant={`${
                activeKey === "bulk-employees" ? "secondary" : "ghost"
              }`}
              size="sm"
              className={`w-full justify-start ${
                activeKey === "bulk-employees"
                  ? "white"
                  : "w-full justify-start text-gray-500"
              }`}
              onClick={() => {
                dispatch(setActiveKey("bulk-employees"));
                router.push("/documentation/employee-roster/bulk-employees");
              }}
            >
              Bulk upload Employees
            </Button>
            <Button
              variant={`${
                activeKey === "list-employees" ? "secondary" : "ghost"
              }`}
              size="sm"
              className={`w-full justify-start ${
                activeKey === "list-employees"
                  ? "white"
                  : "w-full justify-start text-gray-500"
              }`}
              onClick={() => {
                dispatch(setActiveKey("list-employees"));
                router.push("/documentation/employee-roster/list-employees");
              }}
            >
              List Employees
            </Button>
            <Button
              variant={`${
                activeKey === "get-employee" ? "secondary" : "ghost"
              }`}
              size="sm"
              className={`w-full justify-start ${
                activeKey === "get-employee"
                  ? "white"
                  : "w-full justify-start text-gray-500"
              }`}
              onClick={() => {
                dispatch(setActiveKey("get-employee"));
                router.push("/documentation/employee-roster/get-employee");
              }}
            >
              Get an Employee
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarDocumentation;
