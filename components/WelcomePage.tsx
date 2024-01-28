"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="bg-cover bg-center w-full h-screen"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/kaggle-datasets-images/1169316/1958932/953e1a653494abd76045a348a7e2d9e3/dataset-card.jpg?t=2021-02-19-12-27-08')`,
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <div className="text-center text-white mt-96">
            <h2 className="text-3xl font-bold mb-2">Recipe Passport</h2>
            <p className="mb-4 text-sm w-96">
              Welcome to Recipe Passport where you virtually travel the world through recipes.
            </p>

            <Link href="/Home">
              
                <Button className="w-full font-bold shadow-lg bg-[#86BF3E] text-white px-4 py-6 rounded-full hover:bg-green-600">
                  Get Started
                </Button>
              
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
