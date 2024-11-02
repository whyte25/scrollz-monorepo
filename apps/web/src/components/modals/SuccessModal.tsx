"use client";

import { icons } from "@/constants/icons";
import { cn } from "@scrollz/lib";
import { Button, Modal } from "@scrollz/ui";
import Image, { StaticImageData } from "next/image";

interface ISuccessModal {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  title: string;
  description: string;
  buttonText?: string;
  buttonClassName?: string;
  showButton?: boolean;
  hideCloseIcon?: boolean;
  onClick?: () => void;
  icon?: StaticImageData;
}

export function Successmodal({
  isModalOpen,
  handleCloseModal,
  title,
  description,
  buttonText,
  showButton,
  icon,
  hideCloseIcon,
  onClick,
  buttonClassName,
}: ISuccessModal) {
  return (
    <Modal
      hideIcon={hideCloseIcon}
      isModalOpen={isModalOpen}
      handleCloseModal={handleCloseModal}
      className="max-w-[90%] sm:max-w-[450px]"
    >
      <div className="my-5 flex flex-col items-center justify-center gap-3 px-5">
        <Image
          src={icon || icons.SuccessIcon}
          alt="image"
          className="h-14 w-14"
        />
        <h3 className="font-semibold">{title}</h3>

        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-center text-sm text-gray-600"
        />
        {showButton && (
          <Button className={cn("w-fit", buttonClassName)} onClick={onClick}>
            {buttonText}
          </Button>
        )}
      </div>
    </Modal>
  );
}
