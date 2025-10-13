import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import beforeAfter from '@assets/generated_images/Kitchen_before_after_transformation_02b205be.png';

export default function InteractiveTabs() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-tabs">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-tabs-title">
            We design & create product to suit your lifestyle...
          </h2>
        </div>

        <Tabs defaultValue="360" className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-12" data-testid="tabs-list">
            <TabsTrigger value="360" data-testid="tab-360">360° KITCHEN PREVIEW</TabsTrigger>
            <TabsTrigger value="before-after" data-testid="tab-before-after">BEFORE / AFTER</TabsTrigger>
            <TabsTrigger value="content" data-testid="tab-content">CONTENT TAB</TabsTrigger>
          </TabsList>

          <TabsContent value="360" className="mt-8" data-testid="content-360">
            <div className="bg-muted rounded-md p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
              <div className="w-24 h-24 border-4 border-primary rounded-full flex items-center justify-center mb-6 animate-pulse">
                <span className="text-3xl">360°</span>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">CLICK TO LOAD..</h3>
              <p className="text-muted-foreground">Creating Kitchens For Better Living</p>
            </div>
          </TabsContent>

          <TabsContent value="before-after" className="mt-8" data-testid="content-before-after">
            <div className="relative overflow-hidden rounded-md max-w-4xl mx-auto">
              <img
                src={beforeAfter}
                alt="Kitchen transformation"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-md">
                <p className="text-sm font-semibold">Before & After Comparison</p>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-64"
                data-testid="slider-before-after"
              />
            </div>
          </TabsContent>

          <TabsContent value="content" className="mt-8" data-testid="content-tab">
            <div className="max-w-4xl mx-auto bg-muted rounded-md p-12">
              <div className="flex items-center gap-8 mb-8">
                <h1 className="text-5xl font-heading font-bold">ARGU</h1>
              </div>
              <h4 className="text-2xl font-heading font-semibold mb-4">
                Lectus scelerisque, risus purus pellentesque.
              </h4>
              <p className="text-muted-foreground mb-6">
                Proin commodo dui lorem, id finibus risus dapibus sed. Duis ultrices lacinia urna, sit amet fringilla risus dapibus a. Praesent fringilla magna viverra risus elementum, ac faucibus velit venenatis id finibus risus dapibus sed. Duis ultrices lacinia urna.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Alienum phaedrum torquatos.</li>
                <li>• Eius lorem tincidunt vixat.</li>
                <li>• Os ei nisl graecis, vix aperiri consequat.</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
