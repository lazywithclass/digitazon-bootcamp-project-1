INSERT INTO public.type(id, name) VALUES (1, 'nighiri');
INSERT INTO public.type(id, name) VALUES (2, 'sashimi');
INSERT INTO public.type(id, name) VALUES (3, 'uramaki');
INSERT INTO public.type(id, name) VALUES (4, 'temaki');

INSERT INTO public.product(id, description, image, name, price, type_id)
VALUES (1, 'Il nighiri salmone: re incontrastato della cucina giapponese. Del saporito salmone su una gustosa base di riso.', 'nighiri-salmone.png', 'Nighiri salmone', 10, 1);
INSERT INTO public.product(id, description, image, name, price, type_id)
VALUES (2, 'Di sapore delicato, il nighiri al tonno è un ottimo passaggio verso il resto del pasto.', 'nighiri-tonno.png', 'Nighiri tonno', 7, 1);
INSERT INTO public.product(id, description, image, name, price, type_id)
VALUES (3, 'Di classe, mangiarlo senza risultare impacciati è un buon traguardo per ogni sushi lover!', 'nighiri-gambero.png', 'Nighiri gambero', 8, 1);

INSERT INTO public.product(id, description, image, name, price, type_id)
VALUES (4, 'West Coast Baby!  Arrivano sempre in 8, un roll di riso, salmone e sapori.', 'uramaki-california.png', 'Uramaki california', 10, 3);
INSERT INTO public.product(id, description, image, name, price, type_id)
VALUES (5, 'Granchio riso e tanto amore, straigh from Japan!', 'uramaki-ebiten.png', 'Uramaki ebiten', 7, 3);
INSERT INTO public.product(id, description, image, name, price, type_id)
VALUES (6, 'ROAR! Niente ingredienti per questo, fidatevi di noi: occhi chiusi e aprite la bocca!', 'uramaki-tiger-roll.png', 'Uramaki tiger roll', 8, 3);
