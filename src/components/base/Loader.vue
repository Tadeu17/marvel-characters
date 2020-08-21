<template>
  <!-- MUTLI SPINNER -->
  <table id="loader">
    <tr>
      <td>
        <div class="multi-spinner-container">
          <div class="multi-spinner">
            <div class="multi-spinner">
              <div class="multi-spinner">
                <div class="multi-spinner">
                  <div class="multi-spinner">
                    <div class="multi-spinner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
/* MULTI SPINNER */

#loader {
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  background: #e62c45;
}

#loader td {
  vertical-align: middle;
  height: 100%;
}

.multi-spinner-container {
  width: 150px;
  height: 150px;
  position: relative;
  margin: auto;
  overflow: hidden;
}

.multi-spinner {
  position: absolute;
  width: calc(100% - 9.9px);
  height: calc(100% - 9.9px);
  border: 5px solid transparent;
  border-top-color: #fff;
  border-radius: 50%;
  -webkit-animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;
  animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
