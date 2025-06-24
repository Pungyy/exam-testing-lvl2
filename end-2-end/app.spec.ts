import { test, expect } from '@playwright/test';

test.describe('Tests basiques sur rubrr.s3-main.oktopod.app', () => {

  test('Page d’accueil affiche au moins une question et un tag cliquable', async ({ page }) => {
    await page.goto('https://rubrr.s3-main.oktopod.app/');

    // Au moins une question visible (h2)
    const questions = page.locator('h2');
    await expect(questions.first()).toBeVisible();

    // Au moins un tag visible (liens)
    const tags = page.locator('a');
    await expect(tags.first()).toBeVisible();
  });

  test('Cliquer sur un tag filtre les questions sans erreur', async ({ page }) => {
    await page.goto('https://rubrr.s3-main.oktopod.app/');

    const tags = page.locator('a');
    await expect(tags.first()).toBeVisible();

    // Surveiller les erreurs JS
    const errors = [];
    page.on('pageerror', (exception) => {
      errors.push(exception);
    });

    await tags.first().click();

    // Vérifier qu’au moins une question est toujours visible après filtre
    const questions = page.locator('h2');
    await expect(questions.first()).toBeVisible();

    expect(errors).toHaveLength(0);
  });

  test('Accès au glossaire fonctionne et affiche des questions', async ({ page }) => {
    await page.goto('https://rubrr.s3-main.oktopod.app/');

    // Trouver le lien vers glossaire (avec getByText pour plus de souplesse)
    const glossaireLink = page.getByText(/glossaire/i);
    await expect(glossaireLink).toBeVisible();
    await glossaireLink.click();

    // Vérifier qu’il y a au moins une question (h2) affichée dans le glossaire
    const questions = page.locator('h2');
    await expect(questions.first()).toBeVisible();
  });

  test('Détail d’une question affiche question, réponse et questions du même thème', async ({ page }) => {
    await page.goto('https://rubrr.s3-main.oktopod.app/glossaire');

    // Cliquer sur la première question du glossaire (lien <a>)
    const firstQuestionLink = page.locator('main a').first();
    await expect(firstQuestionLink).toBeVisible();
    await firstQuestionLink.click();

    // Question (h2)
    const questionTitle = page.locator('h2');
    await expect(questionTitle.first()).toBeVisible();

    // Réponse (ex: un paragraphe visible)
    const answer = page.locator('p, div').filter({ hasText: /./ }).first();
    await expect(answer).toBeVisible();

    // Autres questions du même thème (liens)
    const relatedQuestions = page.locator('main a');
    await expect(relatedQuestions.first()).toBeVisible();
  });

});
