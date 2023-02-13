export interface Product{
    id: number;
    img: string;
    name: string;
    price: number;
    description: string;
}

export const products = [
    {   
        id: 1,
        img: "../assets/img/soap1.webp",
        name: "Charcoal & Hemp Oil",
        price: 3500,
        description: `
This limited edition collection of shea powered soaps is perfect for combatting dry winter skin. Each bar is enriched with extra shea butter and uniquely powerful moisturizing oils.
        
What sets this bar apart?
        
Scent Experience: Earthy patchouli and grounding vetiver come together to deliver a uniquely rich and purifying scent.
        
Enriched with: Omega-rich hemp oil to hydrate and soothe dry, irritated skin.
        
Made with: ultra rich organic fair trade shea butter & soothing hemp oil
        
These soaps are almost twice the size of our regular bar soaps100% Natural | Tested on people not animals | Size/Weight: 180g`,
        
    },
    {
        id: 2,
        img: "../assets/img/soap2.webp",
        name: "Cinnamon & Oat Oil",
        price: 4000,
        description: `

        This limited edition collection of shea powered soaps is perfect for combatting dry winter skin. Each bar is enriched with extra shea butter and uniquely powerful moisturizing oils.
        
        What sets this bar apart?
        
        Scent Experience: Warm, spicy cinnamon with a hint of sweet fennel come together to create this comforting bar soap.
        
        Enriched with: Calming and nourishing oat oil to alleviate dry, itchy skin.
        
        Made with: ultra rich organic fair trade shea butter & nourishing oat oil
        
        These soaps are almost twice the size of our regular bar soaps.
        
        100% Natural | Tested on people not animals | Size/Weight: 180g`,

    },
    {
        id: 3,
        img: "../assets/img/soap3.webp",
        name: "Spearmint & Sesame Oil",
        price: 3700,
        description: `

        This limited edition collection of shea powered soaps is perfect for combatting dry winter skin. Each bar is enriched with extra shea butter and uniquely powerful moisturizing oils.
        
        What sets this bar apart?
        
        Scent Experience: Refreshing spearmint uplifts this blend with delicate notes of floral geranium and sweet basil.
        
        Enriched with: vitamin-rich organic sesame oil to moisturize skin.
        
        Made with: ultra rich organic fair trade shea butter & moisturizing sesame oil
        
        These soaps are almost twice the size of our regular bar soaps.
        
        100% Natural | Tested on people not animals | Size/Weight: 180g`,
    }
]