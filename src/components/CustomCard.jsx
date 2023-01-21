import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import "./CustomCard.css";

const CustomCard = ({
  load = false,
  post: { title = "Title", body = "Body", id = "User ID" },
  photo,
}) => {
  return (
    <>
      <Card sx={{ width: { xs: "90%", md: "400px" }, m: "auto" }}>
        <CardHeader
          avatar={
            load ? (
              <Avatar alt="user image" src="https://picsum.photos/200/300" />
            ) : (
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            )
          }
          title={
            load ? (
              <Typography variant="h6">User ID: {id}</Typography>
            ) : (
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            )
          }
          action={
            <IconButton>
              <MoreVert />
            </IconButton>
          }
          subheader={
            load ? (
              "Descriptions"
            ) : (
              <Skeleton animation="wave" height={8} width="60%" />
            )
          }
        ></CardHeader>
        {load ? (
          <CardMedia
            component="img"
            height="200"
            image={
              photo
                ? photo.urls.full
                : "https://images.unsplash.com/photo-1674247489394-524fef63c0ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            }
            alt="some image"
            sx={{
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "4px",
            }}
          />
        ) : (
          <Skeleton
            animation="wave"
            width="100%"
            height="300px"
            variant="rectangular"
            sx={{ borderRadius: "4px", mx: "auto" }}
          />
        )}
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            {load ? (
              <>
                <Typography variant="h5" className="cut-off-title">
                  {title}
                </Typography>
                {title.length * 24 > 400 && (
                  <input type="checkbox" className="show-more-title" />
                )}
              </>
            ) : (
              <Skeleton animation="wave" height={32} width="90%" />
            )}
          </Stack>
          {load ? (
            <>
              <Typography variant="body1" className="cut-off-text">
                {body}
              </Typography>
              <input type="checkbox" className="show-text" />
            </>
          ) : (
            <>
              <Skeleton height={12} sx={{ mb: 0.4 }} />
              <Skeleton height={12} sx={{ mb: 0.4 }} />
              <Skeleton height={12} sx={{ mb: 0.4 }} width="80%" />
            </>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default CustomCard;
