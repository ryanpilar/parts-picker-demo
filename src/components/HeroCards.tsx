import { useRef, useCallback } from "react";
import * as htmlToImage from "html-to-image";
import { Card, CardContent } from "@/components/ui/card";
import { icons } from "@/components/Hero.tsx";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react"; // Download icon from Lucide

interface HeroCardsProps {
    selectedItems: string[];
}

export const HeroCards = ({ selectedItems }: HeroCardsProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const downloadImage = useCallback(() => {
        if (cardRef.current === null) {
            return;
        }

        htmlToImage
            .toPng(cardRef.current, {
                cacheBust: true,
            })
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "card-image.png";
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.error("Oops, something went wrong!", err);
            });
    }, [cardRef]);

    return (
        <div className="flex flex-col items-center">
            {/* The card to be converted to an image */}
            <Card
                ref={cardRef}
                className="relative w-[700px] h-[500px] flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10"
            >
                <CardContent className="text-center pb-2">
                    <p>
                        I really enjoy transforming ideas into functional software that
                        exceeds expectations.
                    </p>
                </CardContent>

                {icons.map((icon) =>
                    selectedItems.includes(icon.id) ? (
                        <div
                            key={icon.id}
                            style={{
                                position: "absolute",
                                left: `${icon.coordinates.x}px`,
                                top: `${icon.coordinates.y}px`,
                            }}
                        >
                            <span className="text-9xl">{icon.icon}</span> {/* XXXXL size */}
                        </div>
                    ) : null
                )}
            </Card>

            <div className="flex justify-end w-full mt-4 space-x-4">
                <Button
                    onClick={downloadImage}
                    variant='secondary'
                    className="w-56 bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-white hover:bg-blue-700 flex items-center justify-center"
                >
                    Download Image
                    <Download className="ml-2 w-5 h-5" /> {/* Download icon with spacing */}
                </Button>
            </div>
        </div>
    );
};
