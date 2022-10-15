import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { List, ListItemText } from "@mui/material";

function ProfilPersonnel() {
  const { user } = useAuth0();


  return (
    <div>
      {user && (
        <>
        <Stack direction="row" spacing={2}>
          <Avatar
            src={user.picture}
            alt="user_picture_error"
            sx={{ width: 150, height: 150 }}
          />
        </Stack>
        <List>
            <ListItemText>
                {user.name}
            </ListItemText>
        </List>
        </>
      )}
    </div>
  );
}

export default ProfilPersonnel;
