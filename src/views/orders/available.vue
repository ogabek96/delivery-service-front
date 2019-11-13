<template>
  <div class="app-container">
    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#sidebar-collapse"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"><span>Lumino</span>Admin</a>
          <ul class="nav navbar-top-links navbar-right">
            <li class="dropdown">
              <a
                class="dropdown-toggle count-info"
                data-toggle="dropdown"
                href="#"
              >
                <em class="fa fa-envelope"></em
                ><span class="label label-danger">15</span>
              </a>
              <ul class="dropdown-menu dropdown-messages">
                <li>
                  <div class="dropdown-messages-box">
                    <a href="profile.html" class="pull-left">
                      <img
                        alt="image"
                        class="img-circle"
                        src="http://placehold.it/40/30a5ff/fff"
                      />
                    </a>
                    <div class="message-body">
                      <small class="pull-right">3 mins ago</small>
                      <a href="#"
                        ><strong>John Doe</strong> commented on
                        <strong>your photo</strong>.</a
                      >
                      <br /><small class="text-muted"
                        >1:24 pm - 25/03/2015</small
                      >
                    </div>
                  </div>
                </li>
                <li class="divider"></li>
                <li>
                  <div class="dropdown-messages-box">
                    <a href="profile.html" class="pull-left">
                      <img
                        alt="image"
                        class="img-circle"
                        src="http://placehold.it/40/30a5ff/fff"
                      />
                    </a>
                    <div class="message-body">
                      <small class="pull-right">1 hour ago</small>
                      <a href="#"
                        >New message from <strong>Jane Doe</strong>.</a
                      >
                      <br /><small class="text-muted"
                        >12:27 pm - 25/03/2015</small
                      >
                    </div>
                  </div>
                </li>
                <li class="divider"></li>
                <li>
                  <div class="all-button">
                    <a href="#">
                      <em class="fa fa-inbox"></em>
                      <strong>All Messages</strong>
                    </a>
                  </div>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <a
                class="dropdown-toggle count-info"
                data-toggle="dropdown"
                href="#"
              >
                <em class="fa fa-bell"></em
                ><span class="label label-info">5</span>
              </a>
              <ul class="dropdown-menu dropdown-alerts">
                <li>
                  <a href="#">
                    <div>
                      <em class="fa fa-envelope"></em> 1 New Message
                      <span class="pull-right text-muted small"
                        >3 mins ago</span
                      >
                    </div>
                  </a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">
                    <div>
                      <em class="fa fa-heart"></em> 12 New Likes
                      <span class="pull-right text-muted small"
                        >4 mins ago</span
                      >
                    </div>
                  </a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">
                    <div>
                      <em class="fa fa-user"></em> 5 New Followers
                      <span class="pull-right text-muted small"
                        >4 mins ago</span
                      >
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <!-- /.container-fluid -->
    </nav>
    <div id="sidebar-collapse" class="col-sm-3 col-lg-2 sidebar">
      <div class="profile-sidebar">
        <div class="profile-userpic">
          <img
            src="http://placehold.it/50/30a5ff/fff"
            class="img-responsive"
            alt=""
          />
        </div>
        <div class="profile-usertitle">
          <div class="profile-usertitle-name">Username</div>
          <div class="profile-usertitle-status">
            <span class="indicator label-success"></span>Online
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="divider"></div>
      <form role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search" />
        </div>
      </form>
      <ul class="nav menu">
        <li class="parent">
          <a data-toggle="collapse" href="#sub-item-1">
            <em class="fa fa-navicon">&nbsp;</em> Orders
            <span
              data-toggle="collapse"
              href="#sub-item-1"
              class="icon pull-right"
              ><em class="fa fa-plus"></em
            ></span>
          </a>
          <ul class="children collapse" id="sub-item-1">
            <li>
              <router-link to="/orders/available">
                <span class="fa fa-arrow-right">&nbsp;</span> View available
                orders
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/login"
            ><em class="fa fa-power-off">&nbsp;</em> Logout</router-link
          >
        </li>
      </ul>
    </div>
    <!--/.sidebar-->
    <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
      <div class="row">
        <ol class="breadcrumb">
          <li>
            <a href="#">
              <em class="fa fa-home"></em>
            </a>
          </li>
          <li class="active">Forms</li>
        </ol>
      </div>
      <!--/.row-->

      <!--/.row-->
      <div class="row">
        <div class="col-lg-12">
          <div class="panel panel-default">
            <div class="panel-heading">List of available orders</div>
            <div class="panel-body">
              <div class="col-md-12">
                <el-table
                  :data="ordersList"
                  style="width: 100%"
                  :empty-text="'There is no available orders right now.'"
                >
                  <el-table-column prop="location" label="Location" />
                  <el-table-column prop="price" label="Price" />
                  <el-table-column prop="status" label="Status" />
                  <el-table-column prop="createdDate" label="Created date" />
                  <el-table-column label="Action">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        type="primary"
                        @click="process(scope.row)"
                        >Process</el-button
                      >
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getAvailable as getAvailableOrders,
  process as processOrder,
  getProcessing as getProcessingOrder
} from "@/api/order";
const sound = require("../../assets/notification.mp3");
export default {
  data() {
    return {
      ordersList: [],
      prevOrdersCount: 0,
      interval: null,
      mySound: new Audio(sound)
    };
  },
  mounted() {},
  created() {
    getProcessingOrder().then(order => {
      if (order.data.info !== "empty") {
        this.$router.push({ name: "ProcessingOrder" });
      }
    });

    if (this.interval) { // clear existing interval
      clearInterval(this.interval);
    }

    this.interval = setInterval(
      function() {
        return getAvailableOrders().then(orders => {
          this.ordersList = orders.data;
          if (this.prevOrdersCount < this.ordersList.length) {
            this.prevOrdersCount = this.ordersList.length;
            this.mySound.play();
          } else {
            this.prevOrdersCount = this.ordersList.length;
          }
        });
      }.bind(this),
      1000
    );
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    process(order) {
      return processOrder(order.id).then(() => {
        this.$router.push({ name: "ProcessingOrder" });
      });
    }
  }
};
</script>
