import {
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

import "./Blogs.scss";

function Blogs() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(false);
  const theme = useTheme();
  const mediumDown = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    async function fetchBlogs() {
      const fetchOptions = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        `https://ak-fe-assessment-mock-api.herokuapp.com/blogs`,
        fetchOptions
      );
      // Handle no content
      if (response.status === 204) {
        setError(true);
      }
      try {
        const data = await response.json();
        if (response.ok) {
          const newBlogs = data.sort((a, b) => {
            return new Date(b.publishedDate) - new Date(a.publishedDate);
          });
          setBlogs(newBlogs);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      }
    }
    fetchBlogs();
  }, []);

  if (error) return <Typography>Something went wrong...</Typography>;

  return (
    <>
      <header className="blogs-header">
        <Typography variant="h4">Blogs: </Typography>
        <ToggleButtonGroup
          value={selectedFilter}
          exclusive
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <ToggleButton value="latest">Latest</ToggleButton>
          <ToggleButton value="author">By Damian Kastbauer</ToggleButton>
          <ToggleButton value="all">All</ToggleButton>
        </ToggleButtonGroup>
      </header>
      <Divider variant="fullWidth"></Divider>
      <section className="blogs">
        <Grid container spacing={2}>
          {blogs
            .filter((b) => {
              if (
                selectedFilter === "author" &&
                b.authorName === "Damian Kastbauer"
              ) {
                return true;
              }
              if (selectedFilter === "latest") {
                const today = new Date();
                if (new Date(b.publishedDate).getYear() === today.getYear()) {
                  return true;
                }
              }
              if (selectedFilter === "all") {
                return true;
              }
              return false;
            })
            .map((blog) => (
              <Grid
                item
                key={blog.id}
                xs={mediumDown ? 12 : selectedFilter === "all" ? 3 : 6}
              >
                <BlogCard blog={blog} selectedFilter={selectedFilter} />
              </Grid>
            ))}
        </Grid>
      </section>
    </>
  );
}

export default Blogs;
