<template>
	<v-toolbar>
		<v-toolbar-title>Title</v-toolbar-title>
		<v-spacer></v-spacer>
			<v-toolbbar-items>
				<v-btn text>
					<router-link to="/">Home</router-link>
				</v-btn>
				<v-btn text>
					<router-link to="/curricula">
						View all
					</router-link>
				</v-btn>
			    <v-btn text>
					<router-link to="/curricula/create">
						Create
					</router-link>
				</v-btn>
			</v-toolbbar-items>
	</v-toolbar>
</template>	