import { test, expect} from '../fixtures/login_fixtures';
import { MyAccount1776Page } from '../Pages/1776MyAccountPage';

test("Check user email on my account page", async ({HomePage, LoginPage, page }) => {
    const myAccountPage = new MyAccount1776Page(page);
    await HomePage.clickMenuButton();
    await HomePage.clickMyAccountMenuItem();
    await myAccountPage.checkUsersEmail("asova+1776client001@techmagic.co");
});