<template>
  <div id="app">
    <v-app>
      <v-toolbar
        app
        :absolute="toolbar.absolute"
        :fixed="toolbar.fixed"
        :clipped-right="toolbar.clippedRight"
      >
        <v-toolbar-title>Test</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class>
          <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
        </v-toolbar-items>
      </v-toolbar>

      <v-navigation-drawer
        :clipped="drawer.clipped"
        :fixed="drawer.fixed"
        :absolute="drawer.absolute"
        :permanent="drawer.permanent"
        :mini-variant="drawer.mini"
        v-model="drawer.open"
        app
        right
      >
        <v-list>
          <v-list-tile @click="toggleMiniDrawer">
            <v-list-tile-action>
              <v-icon>aspect_ratio</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Menu 1</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider></v-divider>
          <v-list-tile @click="toggleMiniDrawer">
            <v-list-tile-action>
              <v-icon>aspect_ratio</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Menu 2</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-content>
        <Dashboard/>
      </v-content>
      <v-footer app :fixed="footer.fixed" :clipped-right="footer.clippedRight">
        <span class="caption mx-3">&copy; 2019 test</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard";

export default {
  name: "App",
  components: {
    Dashboard
  },
  data: () => ({
    drawer: {
      // sets the open status of the drawer
      open: true,
      // sets if the drawer is shown above (false) or below (true) the toolbar
      clipped: true,
      // sets if the drawer is CSS positioned as 'fixed'
      fixed: false,
      // sets if the drawer remains visible all the time (true) or not (false)
      permanent: false,
      // sets the drawer to the mini variant, showing only icons, of itself (true)
      // or showing the full drawer (false)
      mini: true,

      absolute: true
    },
    toolbar: {
      //
      fixed: true,
      // sets if the toolbar contents is leaving space for drawer (false) or not (true)
      clippedRight: true,

      absolute: true
    },
    footer: {
      // sets the CSS position of the footer
      fixed: false,
      // sets if the footer is full width (true) or gives space to the drawer (false)
      clippedRight: true,

      absolute: true
    }
  }),

  props: {
    source: String
  },

  methods: {
    toggleMiniDrawer() {
      this.drawer.mini = !this.drawer.mini;
    },
    // toggles the drawer type (permanent vs temporary) or shows/hides the drawer
    toggleDrawer() {
      if (this.drawer.permanent) {
        this.drawer.permanent = !this.drawer.permanent;
        // set the clipped state of the drawer and toolbar
        this.drawer.clipped = true;
        this.toolbar.clippedRight = true;
      } else {
        // normal drawer
        this.drawer.open = !this.drawer.open;
      }
    }
  }
};
</script>
