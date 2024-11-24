"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

import { X } from "lucide-react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import thumbnail from "@/public/images/all-img/thumbnail.png";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
const AddBlock = ({
  className,
  image = thumbnail,
  title = "Storage capacity",
  desc = " Out of your total storage on Premium Plan, you have used up 40%.",
}: {
  className?: string;
  image?: any;
  title?: string;
  desc?: string;
}) => {
  const [openVideo, setOpenVideo] = useState(false);
  return (
    <>
    <div></div>
    </>
  );
};

export default AddBlock;




