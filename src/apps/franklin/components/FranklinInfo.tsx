import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { VIRTUES } from "../constants/virtues"



const FranklinInfo = () => {
    return (
        <div className="w-full max-w-2xl mx-auto pt-10 border-t border-border/50" >
            <Accordion type="single" collapsible className="w-full">

                <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:no-underline">
                        Las 13 virtudes de Benjamin Franklin
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed space-y-4 pt-4">
                        {
                            VIRTUES.map((v) => (
                                <p key={v.id}>
                                    <span className="font-black uppercase">{v.name}:</span>  {v.description}
                                </p>

                            ))
                        }
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-none">
                    <AccordionTrigger className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:no-underline">
                        ¿Cómo funciona el método?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed space-y-4 pt-4">
                        <p>
                            El método de registro de las 13 virtudes de Benjamin Franklin era un sistema muy organizado de autoevaluación diaria.

                        </p>

                        <p>
                            Él llevaba una especie de tabla o cuaderno donde marcaba sus fallas respecto a cada virtud para mejorar su conducta poco a poco.
                        </p>

                        <p>
                            En lugar de intentar dominarlas todas a la vez, el método propone enfocarse en una virtud por semana.
                        </p>
                        <p>
                            Al terminar la semana 13, habrás completado un Ciclo. Se realizan 4 ciclos al año
                            para que el hábito se convierta en parte de tu carácter.
                        </p>

                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-none">
                    <AccordionTrigger className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:no-underline">
                        Instrucciones de Uso
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full bg-foreground" />
                                    <span className="text-[10px] font-bold uppercase italic">Éxito (1 Clic)</span>
                                </div>
                                <p className="text-[11px] text-muted-foreground">Marcas que lograste mantener la virtud durante el día.</p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2 border border-destructive/50 bg-destructive/10 px-1 rounded-sm">
                                    <span className="text-[10px] font-black text-destructive">×</span>
                                    <span className="text-[10px] font-bold uppercase italic text-destructive">Fallo (2 Clics)</span>
                                </div>
                                <p className="text-[11px] text-muted-foreground">Reconoces honestamente que fallaste en la virtud.</p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full border-2 border-input" />
                                    <span className="text-[10px] font-bold uppercase italic">Reset (3 Clics)</span>
                                </div>
                                <p className="text-[11px] text-muted-foreground">Limpia el registro del día seleccionado.</p>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

            </Accordion>


        </div>
    )
}

export default FranklinInfo