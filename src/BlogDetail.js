import {
  alpha,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  InputBase,
  styled,
  TextField,
  OutlinedInput,
  MenuItem,
  Link,
  Chip,
} from "@mui/material";
import React, { useState, ChangeEvent, useEffect } from "react";

function BlogDetail({ blog, handleClose }) {
  useEffect(() => {
    /*
    TODO: I cannot get the content from the url because of a CORS error

    async function fetchBlog() {
      const fetchOptions = {
        method: "GET",
      };

      const response = await fetch(blog.url, fetchOptions);
      console.log(response);
    }
    fetchBlog();
    */
  }, [blog.url]);

  return (
    <Dialog open fullWidth maxWidth="lg">
      <DialogTitle>{blog.title}</DialogTitle>
      <DialogContent>
        <DialogContentText variant="h5">
          <Link href={blog.url}>{blog.title}</Link>
        </DialogContentText>
        <DialogContentText>
          <Link href={blog.authorUrl}>{blog.authorName}</Link>
        </DialogContentText>
        <DialogContentText variant="body2">
          {blog.publishedDate}
        </DialogContentText>
        <DialogContentText variant="body2">
          Locale: {blog.locale}
        </DialogContentText>
        <DialogContentText variant="body2">
          {blog.tags.map((tag) => (
            <Chip label={tag} />
          ))}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default BlogDetail;
