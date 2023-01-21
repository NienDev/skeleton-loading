import { CssBaseline, Grid } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

const ACCESS_KEY = "NEAp5h1JHVNDkHT8qlmGG_JFrbB_b0DOo0RC6j-RBSs";

import { CustomCard, CustomSkeleton } from "./";

const SkeletonLoading = () => {
  // fetch API
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then(({ data }) => {
      setPosts(data);
      console.log(data);
    });
    Axios.get(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`).then(
      ({ data }) => {
        setPhotos(data);
        setLoad(true);
      }
    );
  }, []);

  const skeletons = [];

  return (
    <div>
      <CssBaseline />
      <Grid container spacing={2} justifyContent="center">
        {posts.map((post) => (
          <Grid item key={post.id}>
            <CustomCard
              load={load}
              key={post.id}
              post={post}
              photo={photos[post.id - 1]}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SkeletonLoading;
