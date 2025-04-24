--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

-- Started on 2025-03-05 23:55:21

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 16384)
-- Name: films; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.films (
    id integer NOT NULL,
    name character varying(256) NOT NULL,
    image character varying(512) NOT NULL,
    rating real NOT NULL,
    genre character varying(128) NOT NULL,
    cost integer NOT NULL,
    show_days text[] NOT NULL,
    show_times text[] NOT NULL,
    description character varying(1024) NOT NULL
);


ALTER TABLE public.films OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16418)
-- Name: films_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.films_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.films_id_seq OWNER TO postgres;

--
-- TOC entry 4872 (class 0 OID 0)
-- Dependencies: 223
-- Name: films_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.films_id_seq OWNED BY public.films.id;


--
-- TOC entry 218 (class 1259 OID 16387)
-- Name: purchases; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.purchases (
    id integer NOT NULL,
    status character varying(256) NOT NULL,
    cost integer NOT NULL,
    data date NOT NULL,
    filmid integer NOT NULL,
    userid integer NOT NULL
);


ALTER TABLE public.purchases OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16411)
-- Name: purchases_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.purchases_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.purchases_id_seq OWNER TO postgres;

--
-- TOC entry 4873 (class 0 OID 0)
-- Dependencies: 222
-- Name: purchases_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.purchases_id_seq OWNED BY public.purchases.id;


--
-- TOC entry 219 (class 1259 OID 16390)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    name character varying(64) NOT NULL,
    email character varying(128) NOT NULL,
    hash_password character varying(256) NOT NULL,
    verified boolean NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16404)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 4874 (class 0 OID 0)
-- Dependencies: 221
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 220 (class 1259 OID 16402)
-- Name: users_userid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_userid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_userid_seq OWNER TO postgres;

--
-- TOC entry 4706 (class 2604 OID 16419)
-- Name: films id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.films ALTER COLUMN id SET DEFAULT nextval('public.films_id_seq'::regclass);


--
-- TOC entry 4707 (class 2604 OID 16412)
-- Name: purchases id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchases ALTER COLUMN id SET DEFAULT nextval('public.purchases_id_seq'::regclass);


--
-- TOC entry 4708 (class 2604 OID 16405)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 4860 (class 0 OID 16384)
-- Dependencies: 217
-- Data for Name: films; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.films (id, name, image, rating, genre, cost, show_days, show_times, description) FROM stdin;
1	The Dark Knight	https://avatars.mds.yandex.net/i?id=1eb11f1b07be61bf6805e785ac2a51e7_l-3596236-images-thumbs&n=13	9	Action	300	{Monday,Friday}	{{15:00,20:30},{10:00,NULL}}	When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.
\.


--
-- TOC entry 4861 (class 0 OID 16387)
-- Dependencies: 218
-- Data for Name: purchases; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.purchases (id, status, cost, data, filmid, userid) FROM stdin;
2	inProcess	300	2025-03-02	1	1
\.


--
-- TOC entry 4862 (class 0 OID 16390)
-- Dependencies: 219
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (name, email, hash_password, verified, id) FROM stdin;
asdasd	sinitsin.dmitry2013@yandex.ru	$2b$10$humTBGnZ.mSSi4GLAELMmOHyyl.bDSLbY5aUGdMSV8fyI1kWJz1HO	f	2
asdasd	sinitsadsdin.dmitry2013@yandex.ru	$2b$10$hguy./h3WObh7fueYYPDduNoeVgRgO24RqGoFKNuKsUmQCfc6.pvC	f	3
admin	a@a	$2b$10$ktwaen0Rqv98QWSzgDbifOALnxuKi/mDkx/ffHN/qwO8SvIuy0gme	t	1
\.


--
-- TOC entry 4875 (class 0 OID 0)
-- Dependencies: 223
-- Name: films_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.films_id_seq', 1, true);


--
-- TOC entry 4876 (class 0 OID 0)
-- Dependencies: 222
-- Name: purchases_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.purchases_id_seq', 4, true);


--
-- TOC entry 4877 (class 0 OID 0)
-- Dependencies: 221
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- TOC entry 4878 (class 0 OID 0)
-- Dependencies: 220
-- Name: users_userid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_userid_seq', 1, false);


--
-- TOC entry 4710 (class 2606 OID 16426)
-- Name: films films_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.films
    ADD CONSTRAINT films_id PRIMARY KEY (id);


--
-- TOC entry 4714 (class 2606 OID 16410)
-- Name: users id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT id PRIMARY KEY (id);


--
-- TOC entry 4712 (class 2606 OID 16417)
-- Name: purchases purchases_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchases
    ADD CONSTRAINT purchases_id PRIMARY KEY (id);


-- Completed on 2025-03-05 23:55:21

--
-- PostgreSQL database dump complete
--

