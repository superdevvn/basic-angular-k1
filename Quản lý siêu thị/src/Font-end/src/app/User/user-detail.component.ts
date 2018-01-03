import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './shared/user.model';
import { UserService } from './service/user.service';
import { RoleService } from '../role/service/role.service';
import { Role } from '../role/shared/role.model';
@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html'
})
export class UserDetailComponent {
    user: User = new User();
    roles: Role[] = [];
    id: number = 0;
    routerSubscription: any;
    constructor(private route: ActivatedRoute, 
        private router: Router, 
        private userService: UserService,
        private roleService: RoleService) {
    }

    ngOnInit() {
        this.roleService.getList().then((roles:Role[])=>{
            this.roles=roles;
            console.log(this.roles);
        });
        this.routerSubscription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.roleService.getList().then((roles: Role[])=>{
                this.roles=roles;
                if(this.id==0)this.user.RoleId=roles[0].Id;
            });
            if (this.id > 0) {
                this.userService.getUser(this.id).then((res: User) => {
                    this.user = res;
                }).catch(err => {
                    console.log(err);
                });
            }
        });
    }
    var $w4finish = $('#w4').find('ul.pager li.finish'),
    $w4validator = $("#w4 form").validate({
    highlight: function(element) {
        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    success: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
        $(element).remove();
    },
    errorPlacement: function( error, element ) {
        element.parent().append( error );
    }
});

$w4finish.on('click', function( ev ) {
    ev.preventDefault();
    var validated = $('#w4 form').valid();
    if ( validated ) {
        new PNotify({
            title: 'Congratulations',
            text: 'You completed the wizard form.',
            type: 'custom',
            addclass: 'notification-success',
            icon: 'fa fa-check'
        });
    }
});

$('#w4').bootstrapWizard({
    tabClass: 'wizard-steps',
    nextSelector: 'ul.pager li.next',
    previousSelector: 'ul.pager li.previous',
    firstSelector: null,
    lastSelector: null,
    onNext: function( tab, navigation, index, newindex ) {
        var validated = $('#w4 form').valid();
        if( !validated ) {
            $w4validator.focusInvalid();
            return false;
        }
    },
    onTabClick: function( tab, navigation, index, newindex ) {
        if ( newindex == index + 1 ) {
            return this.onNext( tab, navigation, index, newindex);
        } else if ( newindex > index + 1 ) {
            return false;
        } else {
            return true;
        }
    },
    onTabChange: function( tab, navigation, index, newindex ) {
        var $total = navigation.find('li').size() - 1;
        $w4finish[ newindex != $total ? 'addClass' : 'removeClass' ]( 'hidden' );
        $('#w4').find(this.nextSelector)[ newindex == $total ? 'addClass' : 'removeClass' ]( 'hidden' );
    },
    onTabShow: function( tab, navigation, index ) {
        var $total = navigation.find('li').length - 1;
        var $current = index;
        var $percent = Math.floor(( $current / $total ) * 100);
        $('#w4').find('.progress-indicator').css({ 'width': $percent + '%' });
        tab.prevAll().addClass('completed');
        tab.nextAll().removeClass('completed');
    }
});

    save() {
        this.userService.saveUser(this.user).then((res: User ) => {
            //Server trả về role sau khi save
            //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
            this.user = res;
            alert("Save Success");
            this.router.navigate(['/main/user-list']);
        }).catch(err => {
            alert(err);
        })
    }

    back() {
        this.router.navigate(['/main/user-list']);
        
    }
    
}