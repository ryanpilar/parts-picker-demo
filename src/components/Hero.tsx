import { useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const icons = [
    { id: "recents", icon: "⚡️", label: "Recents", coordinates: { x: 7, y: 10 } },
    { id: "home", icon: "🏠", label: "Home", coordinates: { x: 15, y: 20 } },
    { id: "applications", icon: "📱", label: "Applications", coordinates: { x: 30, y: 15 } },
    { id: "desktop", icon: "💻", label: "Desktop", coordinates: { x: 50, y: 42 } },
    { id: "music", icon: "🎵", label: "Music", coordinates: { x: 65, y: 10 } },
    { id: "camera", icon: "📷", label: "Camera", coordinates: { x: 20, y: 55 } },
    { id: "rocket", icon: "🚀", label: "Rocket", coordinates: { x: 45, y: 22 } },
    { id: "pizza", icon: "🍕", label: "Pizza", coordinates: { x: 70, y: 70 } },
    { id: "coffee", icon: "☕", label: "Coffee", coordinates: { x: 77, y: 80 } },
    { id: "heart", icon: "❤️", label: "Heart", coordinates: { x: 40, y: 30 } },
    { id: "smile", icon: "😊", label: "Smile", coordinates: { x: 65, y: 40 } },
    { id: "fire", icon: "🔥", label: "Fire", coordinates: { x: 20, y: 80 } },
];
export const Hero = () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const toggleItem = (id: string) => {
        setSelectedItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const clearAll = () => {
        setSelectedItems([]);
    };

    const addAll = () => {
        setSelectedItems(icons.map((item) => item.id));
    };

    return (
        <section className="container grid lg:grid-cols-2 py-20 md:py-32 gap-10">
            <div className="text-center lg:text-start space-y-6">
                <main className="text-5xl md:text-6xl font-bold">
                    <h1 className="inline">
                        <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                            Welcome
                        </span>{" "}
                        to the amazing{" "}
                        <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                            BowHead
                        </span>{" "}
                    </h1>{" "}
                    <h2 className="inline">Parts Picker</h2>
                </main>

                <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                    Select the options you would like, and when you are ready download your image.
                </p>

                <div className="space-y-8 mx-auto lg:mx-0 lg:w-10/12">
                    <div className="grid grid-cols-3 gap-4 pl-2">
                        {icons.map((item) => (
                            <div key={item.id} className="flex flex-row items-start space-x-3 py-1.5">
                                <Checkbox
                                    checked={selectedItems.includes(item.id)}
                                    onCheckedChange={() => toggleItem(item.id)}
                                    id={item.id}
                                    className="scale-150" // Make the checkbox larger
                                />
                                <Label htmlFor={item.id} className="font-normal">
                                    {item.label}
                                </Label>
                            </div>
                        ))}
                    </div>

                    <div className="flex space-x-4">
                        {/* Clear Button */}
                        <Button
                            onClick={clearAll}
                            className={`${buttonVariants({ variant: "secondary" })} w-full lg:w-1/3`}
                        >
                            Clear All
                        </Button>

                        {/* Add All Button */}
                        <Button
                            onClick={addAll}
                            className={`${buttonVariants({ variant: "ghost" })} w-full lg:w-1/3`}
                        >
                            Add All
                        </Button>
                    </div>
                </div>
            </div>

            {/* Hero cards sections */}
            <div className="z-10">
                <HeroCards selectedItems={selectedItems} />
            </div>

            {/* Shadow effect */}
            <div className="shadow"></div>
        </section>
    );
};
