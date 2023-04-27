import { type RouterOutputs } from "~/utils/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

export function PostView({ post, author }: PostWithUser) {
  return (
    <Card className="bg-primary text-primary-foreground">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Image
            alt={`Profile image of ${author.username}`}
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
      <CardFooter className="justify-end">
        - {dayjs(post.createdAt).fromNow()}
      </CardFooter>
    </Card>
  );
}
