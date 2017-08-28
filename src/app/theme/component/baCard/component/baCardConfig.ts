import { Component } from "@angular/core";

@Component({
  selector:"ba-card-config",
  template:`
    <div class="ibox-tools">
      <a class="collapse-link ui-sortable">
        <i class="fa fa-chevron-up"></i>
      </a>
      <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
        <i class="fa fa-wrench"></i>
      </a>
      <ul class="dropdown-menu dropdown-user">
        <li><a href>操作1</a>
        </li>
        <li><a href>操作2</a>
        </li>
      </ul>
      <a class="close-link">
        <i class="fa fa-times"></i>
      </a>
    </div>
  `
})
export class BaCardConfig{

}
