import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  interface BlogCardProps{
    title:string
    description:string
    id:string
  }

function BlogCard({title,description}:BlogCardProps) {
    return (
        <Card>
  <CardHeader>
    <CardTitle>{title}</CardTitle>
  </CardHeader>
  <CardContent>
    <p>{description}</p>
  </CardContent>
  <CardFooter>
  <Button>Read More</Button>
  </CardFooter>
</Card>

    )
}


export default BlogCard