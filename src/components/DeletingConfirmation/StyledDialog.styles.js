import { Dialog, styled } from "@mui/material";

export const StyledDialog = styled(Dialog)({
	"&.MuiDialog-root": {
		"& .MuiDialog-container": {
			"& .MuiDialog-paper": {
				maxWidth: "288px",
				background: "#F1F4F6",
				padding: "24px",
				border: "1px solid #FFFFFF",
				borderRadius: "12px",
				"& .MuiDialogTitle-root": {
					padding: "0px",
					display: "flex",
					justifyContent: "center",
					"& .MuiTypography-root": {
						color: "#00172F",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					},
				},
				"& .MuiDialogContent-root": {
					padding: "20px 0px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					textAlign: "center",
				},
				"& .MuiDialogActions-root": {
					padding: "0px",
					display: "flex",
					justifyContent: "space-between",
				},
			},
		},
	},
});