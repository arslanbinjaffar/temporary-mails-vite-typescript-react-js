import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  description: string;
  id: number;
  image: string;
}

function BlogCard({ title, description, id, image }: BlogCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <div className="relative w-full h-[250px]">
        <img
          src={image}
          alt={title}
          className="object-cover rounded-t-lg w-full h-full"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <p>{description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild className="w-full p-6">
          <Link to={`/blog/${id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default BlogCard;
