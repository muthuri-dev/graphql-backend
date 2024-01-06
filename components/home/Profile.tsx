import React from "react";
import { useRouter } from "next/navigation";
import { signOut } from "@/auth";
interface ModalProps {
  onClose: () => void;
}

export default function Profile({ onClose }: ModalProps) {
  const route = useRouter();
  const handleClose = () => {
    onClose();
    route.push("/api/auth/signout?callbackUrl=/login");
  };
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-end">
      <div className="bg-white p-8 max-w-screen-sm w-full h-full overflow-y-auto transform translate-x-full sm:translate-x-0">
        <p className="text-lg font-semibold mb-4">
          This is a responsive modal on the right!
        </p>
        <button
          onClick={handleClose}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
