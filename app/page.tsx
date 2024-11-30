import { Container, Filters, Title, TopBar, ProductCard, ProductsGroupList } from "@/components/shared"




export default function Home() {
  return (
    <>
    <Container>
      <Title text="All pizzas"  size="lg" className="mb-4"/>
 
    </Container>
    <TopBar/>
    <Container className="mt-4 pb-14">
<div className="flex gap-[60px]">
  <div className="w-[250px]"><Filters/></div>
<div className="flex-1">
  <div className="flex flex-col gap-16"> 
  {/* Product List */}

  <ProductsGroupList 
  title="Pizzas" 
  items={[
    {
    id:1, 
    name:"Pizza Cheese", 
    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
    price:500, 
    items:[{price:500,}], 
  },
    {
    id:2, 
    name:"Pizza Cheese", 
    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
    price:500, 
    items:[{price:500,}], 
  },
    {
    id:3, 
    name:"Pizza Cheese", 
    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
    price:600, 
    items:[{price:500,}], 
  },
    {
    id:4, 
    name:"Pizza Cheese", 
    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
    price:500, 
    items:[{price:700,}], 
  }
]} 
    categoryId={1}
    />
  <ProductsGroupList 
  title="Breckfast" 
  items={[
    {
    id:1, 
    name:"Pizza Cheese", 
    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
    price:500, 
    items:[{price:500,}], 
  },
    {
    id:2, 
    name:"Pizza Cheese", 
    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
    price:500, 
    items:[{price:500,}], 
  },
    {
    id:3, 
    name:"Pizza Cheese", 
    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
    price:600, 
    items:[{price:500,}], 
  },
    {
    id:4, 
    name:"Pizza Cheese", 
    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
    price:500, 
    items:[{price:700,}], 
  }
]} 
    categoryId={2}
    />
  <ProductsGroupList 
  title="Combo" 
  items={[
    {
    id:1, 
    name:"Pizza Cheese", 
    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
    price:500, 
    items:[{price:500,}], 
  },
    {
    id:2, 
    name:"Pizza Cheese", 
    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
    price:500, 
    items:[{price:500,}], 
  },
    {
    id:3, 
    name:"Pizza Cheese", 
    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
    price:600, 
    items:[{price:500,}], 
  },
    {
    id:4, 
    name:"Pizza Cheese", 
    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
    price:500, 
    items:[{price:700,}], 
  }
]} 
    categoryId={3}
    />
  </div>
</div>

</div>

    </Container>
    </>
  )

}
