import { type RouterOutputs } from "~/utils/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Image from "next/image";

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

export function PostView({ post, author }: PostWithUser) {
  return (
    <Card className="bg-primary text-primary-foreground">
      <CardHeader>
        <div className="flex">
          <Image
            alt="profile image"
            src={author.profileImageUrl}
            width={32}
            height={32}
            className="h-12 w-12 rounded-full"
          />
          <CardDescription>{author.username}</CardDescription>
        </div>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>{post.content}</CardContent>
    </Card>
  );
}
