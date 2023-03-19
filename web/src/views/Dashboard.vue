<template>
	<div id="main-container">
		<!-- Left Menu -->
		<div class="dark-menu">
			<a id="search-btn" href="#"
				><i class="fa fa-search" aria-hidden="true"></i
			></a>
			<a href="#"><i class="fa fa-folder-o" aria-hidden="true"></i></a>
			<a class="active" href="#"
				><i class="active-icon fa fa-file-text-o" aria-hidden="true"></i
			></a>
			<a href="#"><i class="fa fa-bar-chart" aria-hidden="true"></i></a>
			<a href="#"><i class="fa fa-sliders" aria-hidden="true"></i></a>
		</div>
		<!-- END Left Menu -->

		<!-- Left Menu -->
		<div class="light-menu">
			<h1 id="page_title">Docs</h1>
			<a class="active" href="#">All</a>
			<a href="#">Mines</a>
			<a href="#">Shared</a>
			<a href="#">Drafts</a>
			<a href="#"></a>
		</div>
		<!-- END Left Menu -->

		<!-- Top Menu -->
		<div class="top-menu">
			<nav class="left">
				<a class="active-tab" href="#">Reports</a>
				<a href="#" class="selected">Presentations</a>
				<a href="#">Pinboards</a>
				<a href="#">Tickets</a>
				<a href="#">Forms</a>
				<a href="#">Others</a>
			</nav>
		</div>

		<div id="content">
			<div id="table-content">
				<table cellspacing="0" cellpadding="0">
					<thead>
						<tr>
							<td><input type="checkbox" /></td>
							<td>Name</td>
							<td>Description</td>
							<td>Date Created</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><input type="checkbox" /></td>
							<td class="name-td">Last quarter revenue</td>
							<td class="desc-td">
								Revenue for last quarter in state America for year 2013, with
								...
							</td>
							<td class="date-td">
								6 minutes ago <i class="fa fa-clock-o" aria-hidden="true"></i>
							</td>
							<td></td>
						</tr>
						<tr class="checked">
							<td><input type="checkbox" checked="checked" /></td>
							<td class="name-td">Expenses in 2013</td>
							<td class="desc-td"></td>
							<td class="date-td">
								2 hours ago <i class="fa fa-clock-o" aria-hidden="true"></i>
							</td>
							<td></td>
						</tr>
						<tr>
							<td><input type="checkbox" /></td>
							<td class="name-td">Accounting</td>
							<td class="desc-td">Lorem ipsum dolor sit amet.</td>
							<td class="date-td">
								5 hours ago <i class="fa fa-clock-o" aria-hidden="true"></i>
							</td>
							<td></td>
						</tr>
						<tr>
							<td><input type="checkbox" /></td>
							<td class="name-td">Starbucks orders</td>
							<td class="desc-td">
								Ut euismod augue ut nulla aliquam, eu congue ipsum euismod.
							</td>
							<td class="date-td">
								12 hours ago <i class="fa fa-clock-o" aria-hidden="true"></i>
							</td>
							<td></td>
						</tr>
						<tr>
							<td><input type="checkbox" /></td>
							<td class="name-td">East coast customers in 2012</td>
							<td class="desc-td"></td>
							<td class="date-td">
								yesterday <i class="fa fa-clock-o" aria-hidden="true"></i>
							</td>
							<td></td>
						</tr>
						<tr>
							<td><input type="checkbox" /></td>
							<td class="name-td">Last quarter expenses</td>
							<td class="desc-td">Lorem ipsum dolor sit amet.</td>
							<td class="date-td">
								2 days ago <i class="fa fa-clock-o" aria-hidden="true"></i>
							</td>
							<td></td>
						</tr>
						<tr>
							<td><input type="checkbox" /></td>
							<td class="name-td">HR 2013 worksheet</td>
							<td class="desc-td">Nulla aliquam, eu congue ipsum euismod.</td>
							<td class="date-td">
								2 days ago <i class="fa fa-clock-o" aria-hidden="true"></i>
							</td>
							<td></td>
						</tr>
						<tr>
							<td><input type="checkbox" /></td>
							<td class="name-td">Salaries last quarter</td>
							<td class="desc-td">Lorem ipsum dolor sit amet.</td>
							<td class="date-td">
								1 week ago <i class="fa fa-clock-o" aria-hidden="true"></i>
							</td>
							<td></td>
						</tr>
						<tr>
							<td><input type="checkbox" /></td>
							<td class="name-td">Accounting</td>
							<td class="desc-td">Lorem ipsum dolor sit amet.</td>
							<td class="date-td">
								5 hours ago <i class="fa fa-clock-o" aria-hidden="true"></i>
							</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
$('.button-collapse').sideNav();

$('.collapsible').collapsible();

$('select').material_select();
</script>

<style scoped>
body {
	background: #222428;
}

h1 {
	font-weight: 300;
}

#main-container {
	background: #eaedf2;
	width: 1000px;
	height: 600px;
	margin: 50px auto;
	border-radius: 4px 2px 2px 4px;
}

.dark-menu {
	background: #33353c;
	width: 70px;
	height: 100%;
	border-radius: 2px 0 0 2px;
	text-align: center;
	float: left;
}

.dark-menu a {
	color: #76838c;
	display: block;
	padding: 17px;
	text-decoration: none;
}

.dark-menu a:hover {
	color: #fff;
}

.dark-menu a.active {
	color: white;
	border-left: solid #5e9cf7 3px;
}

.light-menu {
	width: 120px;
	height: 100%;
	float: left;
	margin-right: -9px;
}

.light-menu a {
	color: #85899b;
	display: block;
	padding: 10px 10px 10px 22px;
	text-decoration: none;
	font-size: 12px;
	font-weight: 600;
}

.light-menu a:hover {
	color: #333;
}

.light-menu a.active {
	color: #33353c;
}

.active-icon {
	margin-left: -3px;
}

#search-btn {
	background: #5e9cf7;
	color: #fff;
	border-radius: 2px 0 0 0;
}

.top-menu {
	background: #fff;
	width: 819px;
	max-height: 56px;
	float: left;
	margin-left: -1px;
}

#page_title {
	background: #fff;
	padding: 11px 35px 11px 20px;
	float: left;
	font-size: 25px;
	margin: 0px -10px 20px 0;
}

nav {
	position: relative;
	z-index: 1;
	white-space: nowrap;
	float: left;
	position: relative;
	left: 10px;
}

nav a {
	position: relative;
	display: inline-block;
	padding: 1.9em 2em 1.2em 1em;
	color: #757c8f;
	text-decoration: none;
	margin: 0 -3px;
	position: relative;
	top: 4px;
	font-size: 13px;
	font-weight: 600;
}

nav a:hover::before {
	content: ''; /* To generate the box */
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0.5em;
	left: 0;
	z-index: -1;
	border-bottom: none;
	border-radius: 5px 2px 0 0;
	background: #eaedf2;
	box-shadow: 0 2px hsla(0, 0%, 100%, 0.5) inset;
	transform: perspective(5px) rotateX(2deg);
	transform-origin: bottom left;
}

.active-tab::before {
	content: ''; /* To generate the box */
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0.5em;
	left: 0;
	z-index: -10;
	border-bottom: none;
	border-radius: 5px 2px 0 0;
	background: #eaedf2;
	box-shadow: 0 2px hsla(0, 0%, 100%, 0.5) inset;
	transform: perspective(5px) rotateX(2deg);
	transform-origin: bottom left;
	box-shadow: inset 0px 0px 10px #dadce0;
	height: 80px;
	margin-top: -14px;
}

.active-tab {
	color: #5e9cf7;
	padding: 1.9em 3em 1.2em 1em;
	margin-right: -10px;
	margin-left: 1px;
}

#content {
	background: #eaedf2;
	width: 811px;
	height: 544px;
	float: left;
	margin-left: 7px;
	position: relative;
	z-index: 10;
}

#table-content {
	background: #fff;
	width: 97.5%;
	height: 93.1%;
	margin-top: 20px;
	box-shadow: #dcdee3 0px 0px 10px;
	margin-left: 5px;
}

#table-content table {
	width: 100%;
}

#table-content thead {
	background: #f2f3f5;
}

#table-content thead tr td {
	color: #757e92;
	font-size: 10px;
	text-transform: uppercase;
	padding: 14px 10px;
}

#table-content tbody tr td {
	padding: 14px 10px;
	border-bottom: #eaecee solid 1px;
}

#table-content tbody tr:hover {
	background: #fefaf2;
}

.name-td {
	font-size: 13px;
	font-weight: 600;
}

.desc-td {
	font-size: 13px;
	color: #64697a;
}

.date-td {
	text-align: right;
	font-size: 9px;
}

.checked {
	background: #fefaf2;
}
</style>
