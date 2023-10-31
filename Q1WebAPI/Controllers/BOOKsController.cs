using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Q1WebAPI.Models;

namespace Q1WebAPI.Controllers
{
    public class BOOKsController : ApiController
    {
        private LibraryManagementEntities db = new LibraryManagementEntities();

        // GET: api/BOOKs
        public IQueryable<BOOK> GetBOOKS()
        {
            return db.BOOKS;
        }

        // GET: api/BOOKs/5
        [ResponseType(typeof(BOOK))]
        public IHttpActionResult GetBOOK(int id)
        {
            BOOK bOOK = db.BOOKS.Find(id);
            if (bOOK == null)
            {
                return NotFound();
            }

            return Ok(bOOK);
        }

        // PUT: api/BOOKs/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBOOK(int id, BOOK bOOK)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bOOK.bookid)
            {
                return BadRequest();
            }

            db.Entry(bOOK).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BOOKExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/BOOKs
        [ResponseType(typeof(BOOK))]
        public IHttpActionResult PostBOOK(BOOK bOOK)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.BOOKS.Add(bOOK);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (BOOKExists(bOOK.bookid))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = bOOK.bookid }, bOOK);
        }

        // DELETE: api/BOOKs/5
        [ResponseType(typeof(BOOK))]
        public IHttpActionResult DeleteBOOK(int id)
        {
            BOOK bOOK = db.BOOKS.Find(id);
            if (bOOK == null)
            {
                return NotFound();
            }

            db.BOOKS.Remove(bOOK);
            db.SaveChanges();

            return Ok(bOOK);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BOOKExists(int id)
        {
            return db.BOOKS.Count(e => e.bookid == id) > 0;
        }
    }
}