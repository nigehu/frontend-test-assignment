import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  CardMedia,
  Link,
  Box,
  ButtonBase,
} from "@mui/material";
import { useState, useEffect } from "react";
import BlogDetail from "./BlogDetail";

import "./BlogCard.scss";

/*
    blog: {
        id: string;
        title: string;
        imageUrl: string,
        url: string,
        authorName: string,
        authorUrl: string,
        publishedDate: string (Date),
        locale: string,
        tags: string[]
    }
  */

function BlogCard({ blog, selectedFilter }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <ButtonBase onClick={() => setShowDetail(true)}>
        <Card>
          <CardContent>
            <CardMedia
              component="img"
              height="194"
              image={blog.imageUrl}
              alt={blog.title}
            />
            <Typography variant="h5">
              <Link href={blog.url}>{blog.title}</Link>
            </Typography>
            <Typography>
              <Link href={blog.authorUrl}>{blog.authorName}</Link>
            </Typography>
            <Typography variant="body2">{blog.publishedDate}</Typography>
          </CardContent>
        </Card>
      </ButtonBase>

      {selectedFilter === "author" && (
        <Box sx={{ backgroundColor: "blue", height: 10, width: "100%" }} />
      )}
      {selectedFilter === "latest" && (
        <Box sx={{ backgroundColor: "green", height: 10, width: "100%" }} />
      )}
      {showDetail && (
        <BlogDetail blog={blog} handleClose={() => setShowDetail(false)} />
      )}
    </>
  );
}

export default BlogCard;
