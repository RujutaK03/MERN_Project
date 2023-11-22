import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style1.css';
import AdminHeader from './adminHeader';
import Footer from '../footer';
const AdminHome = () => {
    return (
        <div class="bg-black">
            <AdminHeader />
            <div class="container my-3">
                <main>
                    <h2 class="mov">Welcome, Admin!</h2>
                    
                    <section>
                        <h3 class="text-white">Manage Movies</h3>
                        <p class="text-white">View and update information about movies currently available in the system.</p>
                        <ul>
                            <li class="mov"><a href="/AddMovie" class="links1">Add New Movie</a></li>
                            
                            <li class="mov"><a href="/displayMovie" class="links1">View Movies</a></li>
                        </ul>
                    </section>
                
                    <section>
                        <h3 class="text-white">Manage Theatres</h3>
                        <p class="text-white">Administer the details of theatres where movies are screened.</p>
                        <ul>
                            <li class="mov"><a href="/AddTheatre" class="links1">Add New Theatre</a></li>
                            <li class="mov"><a href="/DisplayTheatre" class="links1">View Theatre Schedule</a></li>
                        </ul>
                    </section>
                    <section>
                        <h3 class="text-white">Manage Shows</h3>
                        <p class="text-white">Administer the details of available shows and timings</p>
                        <ul>
                            <li class="mov"><a href="/AddShows" class="links1">Add New Theatre</a></li>
                            
                        </ul>
                    </section>
                
                    
                </main>
                
            </div>
        <Footer />
        </div>

    );
};

export default AdminHome;
